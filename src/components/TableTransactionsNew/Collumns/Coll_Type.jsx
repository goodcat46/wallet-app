import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import s from './Coll.module.scss'

const Coll_Type = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col, s[title?.action], ...className].join(' ');

  const {  rowData } = useRowContext();
  const transactionType = rowData.type === 'INCOME' ? '+' : '-';

  return <div className={classNames}>{transactionType}</div>;
};

export default Coll_Type;
