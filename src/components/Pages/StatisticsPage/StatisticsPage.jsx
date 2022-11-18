import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import { MONTH } from 'constans/constans';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperation } from 'redux/finance';
import Modal from 'components/Modal/Modal';
import FormAddTransaction from 'components/ModalAddTransactions/ModalAddTransactions';
import DateSelect from '../../DateSelect/DateSelect';
import scss from './StatisticsPage.module.scss';

const StatisticsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const stasticsSummary = useSelector(financeSelectors.getSummary);
  const { categoriesSummary, expenseSummary, incomeSummary, periodTotal } =
    stasticsSummary || {};

  const preparedArray = categoriesSummary?.filter(
    item => item.type === 'EXPENSE'
  );

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const getCurrentMonth = MONTH.getKeyByValue(currentMonth);
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    const monthNumber = MONTH[getCurrentMonth];

    dispatch(
      financeOperation.getSummaryThunk({
        month: monthNumber,
        year: currentYear,
      })
    );
  }, [currentYear, dispatch, getCurrentMonth]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={scss.Statistics}>
      {categoriesSummary?.length > 0 ? (
        <>
          <div className={scss.chartWrapper}>
            <h2 className={scss.statisticsTitle}>Statistics</h2>
            {stasticsSummary && (
              <StatisticsChart
                statChartData={preparedArray}
                periodTotal={periodTotal}
                expenseSummary={expenseSummary}
                incomeSummary={incomeSummary}
              />
            )}
          </div>
          <div className={scss.tableWrapper}>
            <DateSelect />
            {stasticsSummary && (
              <StatisticsTable
                statData={{ preparedArray, incomeSummary, expenseSummary }}
              />
            )}
          </div>
        </>
      ) : (
        <div className={scss.noStatisticContainer}>
          <h1 className={scss.noStatisticMessage}>
            You should{' '}
            <span
              className={scss.modalOpenSpan}
              tabIndex="1"
              onClick={toggleModal}
            >
              add the first transaction
            </span>{' '}
            to show statistics information
          </h1>
          {isModalOpen && (
            <Modal defaultButton={false} handleToggle={toggleModal}>
              <FormAddTransaction onClose={toggleModal} />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default StatisticsPage;
