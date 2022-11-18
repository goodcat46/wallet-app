import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Balance = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col,s[title?.action], ...className].join(' ');
  const { rowData, valueToString } = useRowContext();

  return (
    <div className={classNames}>{valueToString(rowData.balanceAfter)}</div>
  );
};

export default Coll_Balance;
