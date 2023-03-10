import { Main } from '../components/Common/Main';

import { TableListItem } from '../components/Tables/TableList/TableListItem';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { type ComparisonReportSchema } from '../types';
import { Flex, Text, Grid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'wouter';

import { tableListGridTempCols, tableListMaxWidth } from '../utils/layout';
import { useReportStore } from '../utils/store';
import { TableColumnSchemaList } from '../components/Tables/TableList/TableColumnSchemaList';
import { useAmplitudeOnMount } from '../hooks';
import { AMPLITUDE_EVENTS, CR_TYPE_LABEL } from '../utils/amplitudeEvents';
import { CommonModal } from '../components/Common/CommonModal';
import { MasterDetailContainer } from '../components/Common/MasterDetailContainer';

type Props = { data: ComparisonReportSchema };

export function CRTablesListPage({ data }: Props) {
  useDocumentTitle('Comparison Report: Tables');
  useAmplitudeOnMount({
    eventName: AMPLITUDE_EVENTS.PAGE_VIEW,
    eventProperties: {
      type: CR_TYPE_LABEL,
      page: 'table-list-page',
    },
  });
  const modal = useDisclosure();
  const [tableColsEntryId, setTableColsEntryId] = useState(-1);
  const [, setLocation] = useLocation();
  const setReportData = useReportStore((s) => s.setReportRawData);
  setReportData({ base: data.base, input: data.input });
  const {
    tableColumnsOnly = [],
    assertionsOnly,
    rawData,
  } = useReportStore.getState();

  return (
    <Main isSingleReport={false}>
      <MasterDetailContainer
        initAsExpandedTables
        rawData={rawData}
        tableColEntries={tableColumnsOnly}
      >
        <Flex direction="column" w={'100%'} minHeight="650px">
          <Grid
            templateColumns={tableListGridTempCols}
            maxW={tableListMaxWidth}
            px={4}
            my={6}
          >
            <Text>Name</Text>
            <Text>Summary</Text>
            <Text>Assertions</Text>
          </Grid>

          {tableColumnsOnly.map((tableColEntry, i) => {
            return (
              <Flex key={i}>
                <TableListItem
                  combinedAssertions={assertionsOnly}
                  combinedTableEntry={tableColEntry}
                  // onSelect={() =>
                  //   setLocation(`/tables/${tableColEntry[0]}/columns/`)
                  // }
                  onInfoClick={() => {
                    setTableColsEntryId(i);
                    modal.onOpen();
                  }}
                />
              </Flex>
            );
          })}
        </Flex>

        <CommonModal
          {...modal}
          size="2xl"
          title={
            tableColsEntryId !== -1 && tableColumnsOnly[tableColsEntryId][0]
          }
          onClose={() => {
            setTableColsEntryId(-1);
            modal.onClose();
          }}
        >
          <Text fontSize="lg" mb={4}>
            Description:{' '}
            {(tableColsEntryId !== -1 &&
              tableColumnsOnly[tableColsEntryId][1].target?.description) ?? (
              <Text as="i">No description provided.</Text>
            )}
          </Text>
          {tableColsEntryId !== -1 && (
            <TableColumnSchemaList
              baseTableEntryDatum={tableColumnsOnly[tableColsEntryId][1].base}
              targetTableEntryDatum={
                tableColumnsOnly[tableColsEntryId][1].target
              }
            />
          )}
        </CommonModal>
      </MasterDetailContainer>
    </Main>
  );
}
