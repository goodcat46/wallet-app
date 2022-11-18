import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { financeSelectors, financeOperation } from 'redux/finance';
import TableMobile from 'components/TableMobile/TableMobile';
import TableTransactions from 'components/TableTransactions/TableTransactions';
import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';
import scss from './TransactionsPage.module.scss';

const TransactionsPage = props => {
  const transactions = useSelector(financeSelectors.getTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (transactions.length > 0) return;
    dispatch(financeOperation.getTransactionsThunk());
  }, [dispatch, transactions.length]);

  return (
    <div className={scss.TransactionsPage}>
      <Mobile>
        <TableMobile data={transactions} />
      </Mobile>
      <NotMobile>
        <div className={scss.HomeTableBox}>
          <TableTransactions data={transactions} />
        </div>
      </NotMobile>
    </div>
  );
};

export default TransactionsPage;
