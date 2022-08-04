import { Flex, Text } from '@chakra-ui/react';
import { ColumnSchema } from '../../../sdlc/single-report-schema';
import { ZColSchema } from '../../../types';
import { checkColumnCategorical } from '../../../utils/transformers';
import { SRBarChart } from '../../SingleReport/SRBarChart';
import { ColumnCardBodyContainer } from './ColumnCardBodyContainer';
import { ColumnCardDataVisualContainer } from './ColumnCardDataVisualContainer';
import { ColumnCardHeader } from './ColumnCardHeader';
import { ColumnTypeDetailBoolean } from './ColumnTypeDetail/ColumnTypeDetailBoolean';
import { ColumnTypeDetailCategorical } from './ColumnTypeDetail/ColumnTypeDetailCategorical';
import { ColumnTypeDetailDatetime } from './ColumnTypeDetail/ColumnTypeDetailDatetime';
import { ColumnTypeDetailNumeric } from './ColumnTypeDetail/ColumnTypeDetailNumeric';
import { ColumnTypeDetailOther } from './ColumnTypeDetail/ColumnTypeDetailOther';
import { ColumnTypeDetailText } from './ColumnTypeDetail/ColumnTypeDetailText';

interface Props {
  columnDatum: ColumnSchema;
}
export function ColumnCard({ columnDatum }: Props) {
  ZColSchema.parse(columnDatum);
  const { name: title } = columnDatum;

  return (
    <Flex
      direction={'column'}
      bg={'gray.300'}
      width={{ xl: '32%', lg: '45%', md: '100%', base: '100%' }}
      border="1px solid"
      borderColor={'gray.300'}
      h={[700]}
      my={3}
      rounded={'lg'}
      overflowX={'hidden'}
    >
      <ColumnCardHeader columnDatum={columnDatum} />
      <ColumnCardDataVisualContainer title={title}>
        {_getDataChart(columnDatum)}
      </ColumnCardDataVisualContainer>
      <ColumnCardBodyContainer>
        {_getColumnBodyContentUI(columnDatum)}
      </ColumnCardBodyContainer>
    </Flex>
  );
}

/**
 * Handles logic for rendering the right charts
 * @param columnDatum
 * @returns *Chart Component
 */
function _getDataChart(columnDatum: ColumnSchema) {
  const { topk, histogram, total, type } = columnDatum;

  const isCategorical = checkColumnCategorical(columnDatum);

  const chartData = isCategorical ? topk?.values : histogram?.labels;
  const valueCounts = isCategorical ? topk?.counts : histogram?.counts;

  return chartData && valueCounts && total ? (
    <SRBarChart
      data={chartData.map((label, i) => ({
        label,
        isCategorical,
        value: valueCounts[i],
        type,
        total,
      }))}
    />
  ) : (
    <Flex h={230} alignItems={'center'} w={'100%'}>
      <Text textAlign={'center'} w={'inherit'}>
        No data available
      </Text>
    </Flex>
  );
}

/**
 * Handles the logic for rendering the right Column Details
 * @param columnDatum
 * @returns ColumnTypeDetail* Component
 */
function _getColumnBodyContentUI(columnDatum: ColumnSchema) {
  const { type, distinct } = columnDatum;
  const isCategorical = distinct ? distinct <= 100 : false; //this is arbitrary

  if ((type === 'string' || type === 'numeric') && isCategorical)
    return <ColumnTypeDetailCategorical columnDatum={columnDatum} />;
  if (type === 'boolean')
    return <ColumnTypeDetailBoolean columnDatum={columnDatum} />;
  if (type === 'string')
    return <ColumnTypeDetailText columnDatum={columnDatum} />;
  if (type === 'datetime')
    return <ColumnTypeDetailDatetime columnDatum={columnDatum} />;
  if (type === 'numeric')
    return <ColumnTypeDetailNumeric columnDatum={columnDatum} />;
  if (type === 'other')
    return <ColumnTypeDetailOther columnDatum={columnDatum} />;

  return (
    <Text textAlign={'center'} w={'inherit'}>
      The column type: {type} cannot be displayed
    </Text>
  );
}
