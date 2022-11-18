import React from 'react';
import categoryIdArr from 'assets/categoryIdArr';

import scss from './TableTransactions.module.scss';
import getTransactionDate from 'utils/getTransactionDate';
import tableHeaders from 'utils/TableTransactions';

const TableTransactions = ({ data }) => {
  return (
    <div className={scss.container}>
      <table className={scss.table}>
        <thead className={scss.thead}>
          <tr>
            {tableHeaders.map((el, idx) => (
              <th
                key={idx}
                className={[
                  scss.colHead,
                  scss[`col-${idx + 1}`],
                  scss[`colHead${idx + 1}`],
                ].join(' ')}
              >
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={scss.tbody}>
          {data.map(item => {
            const findedCategObj = categoryIdArr.find(
              el => el.id === item.categoryId
            );
            return (
              <tr className={scss.tbodyRow} key={item.id}>
                <td className={[scss.col, scss.td, scss['col-1']].join(' ')}>
                  {getTransactionDate(item.transactionDate)}
                </td>
                <td className={[scss.col, scss.td, scss['col-2']].join(' ')}>
                  {item.type === 'INCOME' ? '+' : '-'}
                </td>
                <td
                  className={[scss.col, scss.td, scss['col-3']].join(' ')}
                  title={findedCategObj.name}
                >
                  {findedCategObj.name}
                </td>
                <td
                  className={[scss.col, scss.td, scss['col-4']].join(' ')}
                  title={item.comment}
                >
                  <div className={scss.comentWrap}>{item.comment}</div>
                </td>
                {item.type === 'INCOME' ? (
                  <td
                    className={[
                      scss.col,
                      scss.td,
                      scss.income,
                      scss['col-5'],
                    ].join(' ')}
                  >
                    {item.amount}
                  </td>
                ) : (
                  <td
                    className={[
                      scss.col,
                      scss.td,
                      scss.expense,
                      scss['col-5'],
                    ].join(' ')}
                  >
                    {item.amount.toString().slice(1)}
                  </td>
                )}
                <td className={[scss.col, scss.td, scss['col-6']].join(' ')}>
                  {item.balanceAfter}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
