import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const CustomTable = ({ headers, bodyRows }) => {
  return (
    <Table variant="simple" style={{ width: '50%', margin: '0 auto' }}>
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {bodyRows.map((row, index) => (
          <Tr key={index}>
            {row.map((cell, index) => (
              <Td key={index}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CustomTable;