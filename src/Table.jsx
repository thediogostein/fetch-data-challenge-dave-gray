import React from 'react';
import TableRow from './TableRow';

function Table({ data }) {
  return (
    <table>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
