import React from 'react';
import TableCell from './TableCell';

function TableRow({ item }) {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <TableCell key={key} cellContent={JSON.stringify(value)} />;
      })}
    </tr>
  );
}

export default TableRow;
