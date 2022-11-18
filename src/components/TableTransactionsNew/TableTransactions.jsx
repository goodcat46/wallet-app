import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableContext from './TableContext';
import { TableStyles as s } from './TableStyleSheet';

const Table = ({ children }) => {
  return (
    <div className={s.table} id='table-root'>
      <TableContext>
        <TableHead />
        <TableBody />
      </TableContext>
    </div>
  );
};

export default Table;
