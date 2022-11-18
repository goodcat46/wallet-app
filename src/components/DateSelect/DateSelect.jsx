import { useState } from 'react';
import css from 'components/DateSelect/DateSelect.module.scss';
import { sprite } from 'assets/images';
import { MONTH, MONTH_NAMES } from 'constans/constans';

import { YEARS } from 'constans/constans';
import { useDispatch } from 'react-redux';
import { financeOperation } from 'redux/finance';
import { useEffect } from 'react';

const DateSelect = () => {
  const [selectMonthActive, setSelectMonthActive] = useState(false);
  const [selectYearActive, setSelectYearActive] = useState(false);
  const [hiddenMonthValue, setHiddenMonthValue] = useState('');
  const [hiddenYearValue, setHiddenYearValue] = useState('');
  const dispatch = useDispatch();

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const getCurrentMonth = MONTH.getKeyByValue(currentMonth);
  const currentYear = currentDate.getFullYear();

  const toggleMonthClass = () => {
    setSelectMonthActive(!selectMonthActive);
  };
  const toggleYearClass = () => {
    setSelectYearActive(!selectYearActive);
  };

  const handleHiddenMonthValue = event => {
    const value = event.target.id;
    setHiddenMonthValue(value);
  };
  const handleHiddenYearValue = event => {
    const value = event.target.textContent;
    setHiddenYearValue(Number(value));
  };

  useEffect(() => {
    const monthNumber = MONTH[hiddenMonthValue];

    if (monthNumber && hiddenYearValue) {
      dispatch(
        financeOperation.getSummaryThunk({
          month: monthNumber,
          year: hiddenYearValue,
        })
      );
    }
  }, [dispatch, hiddenMonthValue, hiddenYearValue]);

  return (
    <>
      <div className={css.selectWrapper}>
        <div
          onClick={toggleMonthClass}
          className={css.select}
          tabIndex="0"
          id="month"
        >
          <div
            className={
              hiddenMonthValue === 'Month'
                ? css.selectHeader
                : [css['selectHeader'], css['isChosen']].join(' ')
            }
          >
            {hiddenMonthValue || getCurrentMonth}
          </div>

          <svg className={css.selectIcon} width="40" height="19">
            <use href={sprite + '#icon-select-arrow'}></use>
          </svg>

          <ul
            className={
              selectMonthActive
                ? [css['selectBody'], css['isActive']].join(' ')
                : css.selectBody
            }
          >
            {MONTH_NAMES.map(month => (
              <li
                onClick={handleHiddenMonthValue}
                className={css.selectItem}
                tabIndex="0"
                id={month}
                key={month}
              >
                {month}
              </li>
            ))}
          </ul>

          <input
            className={css.hiddenInput}
            name="category"
            id="category"
            placeholder="Month"
            value={hiddenMonthValue}
            onChange={handleHiddenMonthValue}
            required
          />
        </div>
        <div
          onClick={toggleYearClass}
          className={css.select}
          tabIndex="0"
          id="year"
        >
          <div
            className={
              hiddenYearValue === 'Year'
                ? css.selectHeader
                : [css['selectHeader'], css['isChosen']].join(' ')
            }
          >
            {hiddenYearValue || currentYear}
          </div>

          <svg className={css.selectIcon} width="40" height="19">
            <use href={sprite + '#icon-select-arrow'}></use>
          </svg>

          <ul
            className={
              selectYearActive
                ? [css['selectBody'], css['isActive']].join(' ')
                : css.selectBody
            }
          >
            {YEARS.map(year => (
              <li
                onClick={handleHiddenYearValue}
                className={css.selectItem}
                tabIndex="0"
                id={year}
                key={year}
              >
                {year}
              </li>
            ))}
          </ul>

          <input
            className={css.hiddenInput}
            name="category"
            id="category"
            placeholder="Year"
            value={hiddenYearValue}
            onChange={handleHiddenYearValue}
            required
          />
        </div>
      </div>
    </>
  );
};

export default DateSelect;
