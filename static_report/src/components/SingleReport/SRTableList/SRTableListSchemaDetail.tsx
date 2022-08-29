import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Icon,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'wouter';

import { type TableSchema } from '../../../sdlc/single-report-schema';

export function SRTableListSchemaDetail({ table }: { table: TableSchema }) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Column</Th>
            <Th>Type</Th>
            <Th width="5%" />
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(table.columns).map((colName) => (
            <Tr
              key={nanoid(10)}
              _hover={{ bgColor: 'gray.50', cursor: 'pointer' }}
            >
              <Td>{table.columns[colName]?.name}</Td>
              <Td>{table.columns[colName]?.schema_type}</Td>
              <Td>
                <Link
                  key={table.name}
                  href={`/tables/${table.name}/columns/${colName}`}
                >
                  <Icon as={FiChevronRight} color="piperider.500" boxSize={6} />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
