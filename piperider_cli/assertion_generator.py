import json
import os

from rich.console import Console
from rich.table import Table

from piperider_cli import raise_exception_when_directory_not_writable
from piperider_cli.assertion_engine import AssertionEngine
from piperider_cli.error import PipeRiderNoProfilingResultError
from piperider_cli.filesystem import FileSystem

console = Console()


def _get_run_json_path(filesystem: FileSystem, input=None):
    console = Console()
    run_json = None
    if input:
        if not os.path.exists(input):
            console.print(f'[bold red]Error: {input} not found[/bold red]')
            return
        if os.path.isdir(input):
            run_json = os.path.join(input, 'run.json')
        else:
            run_json = input
    else:
        latest = os.path.join(filesystem.get_output_dir(), 'latest')
        run_json = os.path.join(latest, 'run.json')
    return run_json


def _validate_input_result(result):
    for f in ['tables', 'id', 'created_at', 'datasource']:
        if f not in result:
            return False
    return True


class AssertionGenerator():
    @staticmethod
    def exec(input_path=None, report_dir: str = None, no_recommend: bool = False):
        filesystem = FileSystem(report_dir=report_dir)
        raise_exception_when_directory_not_writable(report_dir)

        run_json_path = _get_run_json_path(filesystem, input_path)
        if not os.path.isfile(run_json_path):
            raise PipeRiderNoProfilingResultError(run_json_path)

        with open(run_json_path) as f:
            profiling_result = json.loads(f.read())
        if not _validate_input_result(profiling_result):
            console.print(f'[bold red]Error: {run_json_path} is invalid[/bold red]')
            return
        console.print(f'[bold dark_orange]Generating recommended assertions from:[/bold dark_orange] {run_json_path}')

        assertion_engine = AssertionEngine(None)
        if no_recommend:
            template_assertions = assertion_engine.generate_template_assertions(profiling_result)

            # Show the recommended assertions files
            console.rule('Generated Assertions Templates')
            for f in template_assertions:
                console.print(f'[bold green]Assertion Templates[/bold green]: {f}')
        else:
            # Generate recommended assertions
            assertion_engine.load_assertions(profiler_result=profiling_result)
            assertion_exist = True if assertion_engine.assertions_content else False
            console.rule('Generating Recommended Assertions')
            recommended_assertions = assertion_engine.generate_recommended_assertions(profiling_result,
                                                                                      assertion_exist=assertion_exist)
            # Show the generated recommended assertions
            ascii_table = Table(show_header=True, header_style="bold magenta")
            ascii_table.add_column('Table', style="bold yellow")
            ascii_table.add_column('Column', style="bold blue")
            ascii_table.add_column('Test Subject', style="bold green")
            ascii_table.add_column('Assertion', style="bold")

            for assertion in assertion_engine.recommender.generated_assertions:
                assert_values = str(assertion.asserts) if assertion.asserts else ''
                ascii_table.add_row(
                    assertion.table,
                    assertion.column,
                    assertion.name,
                    assert_values,
                )

            console.print(ascii_table)

            # Show the recommended assertions files
            console.rule('Generated Recommended Assertions')
            for f in recommended_assertions:
                console.print(f'[bold green]Recommended Assertion[/bold green]: {f}')
