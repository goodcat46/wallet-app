import React from 'react';

import { useSelector } from 'react-redux';
import { getTransactions } from 'redux/finance/finance-selectors';

import scss from './Balance.module.scss';
const Balance = props => {
  const userBalance = useSelector(getTransactions);

  let totalBalance = userBalance[userBalance.length - 1]?.balanceAfter || 0;

  function numberWithSpaces(x) {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return (
    <div className={scss.balance}>
      <span className={scss.title}>your balance</span>
      <span className={scss.currency}>
        {'₴ '}
        {totalBalance && (
          <span className={scss.value}>{numberWithSpaces(totalBalance)}</span>
        )}
      </span>
    </div>
  );
};

export default Balance;
