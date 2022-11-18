import React from 'react';
import getTransactionDate from 'utils/getTransactionDate';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Date = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col, s[title?.action], ...className].join(' ');
  const { rowData } = useRowContext();

  return (
    <div className={classNames}>
      {getTransactionDate(rowData.transactionDate)}
    </div>
  );
};

export default Coll_Date;
