import React, { Fragment } from 'react';
import TableRow from './TableRow/TableRow';
import RowContext from './TableRow/RowContext';
import { useSelector } from 'react-redux';
import { getTransactions } from 'redux/finance/finance-selectors';

import { TableStyles as s } from './TableStyleSheet';

const TableBody = () => {
  const tableData = useSelector(getTransactions);
  const SortByDate = userTransactions => {
    const transactions = [...userTransactions].sort(
      (prevTransactions, transaction) => {
        const prev = new Date(prevTransactions.transactionDate);
        const current = new Date(transaction.transactionDate);

        return true ? prev - current : current - prev;
      }
    );
    return transactions;
  };

  return (
    <div className={s.tBody}>
      {SortByDate(tableData).map(row => {
        return (
          <Fragment key={row?.id}>
            <RowContext rowInfo={row}>
              <TableRow />
            </RowContext>
          </Fragment>
        );
      })}
    </div>
  );
};

export default TableBody;
