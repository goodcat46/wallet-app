import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { addTransactionThunk } from 'redux/finance/finance-operation';
import { getCategoriesThunk } from 'redux/finance/finance-operation';
import { getCategories } from 'redux/finance/finance-selectors';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import scss from './ModalAddTransactions.module.scss';
import sprite from '../../images/sprite.svg';
import Header from 'components/Header/Header';

export default function FormAddTransaction({ onClose }) {
  const [checked, setChecked] = useState(true);
  const [selectActive, setSelectActive] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('Select a category');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const expenseCategory = categories.filter(category =>
    category.type.includes('EXPENSE')
  );
  const incomeCategory = categories.filter(category =>
    category.type.includes('INCOME')
  );

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    const handleCloseKey = event => {
      if (event.code === 'Escape') {
        onClose(false);
      }
    };

    dispatch(getCategoriesThunk);
    window.addEventListener('keydown', handleCloseKey);

    return () => {
      window.removeEventListener('keydown', handleCloseKey);
    };
  }, [dispatch, onClose]);

  const toggleClass = () => {
    setSelectActive(!selectActive);
  };

  const handleCategoryId = event => {
    const value = event.target;
    setCategoryId(value.id);
    setCategoryName(value.innerText);
  };

  const handleAmountClick = () => {
    setAmount('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const inputs = event.target;

    const Date = inputs.elements.transactionDate.value;
    const transactionDate = moment(Date, 'DD/MM/YYYY', true).format();
    const type = inputs.elements.type.value;

    dispatch(
      addTransactionThunk({
        transactionDate,
        type,
        categoryId,
        comment,
        amount,
      })
    );

    onClose();
  };

  return (
    <div className={scss.modal}>
      {isDesktopOrLaptop ? (
        <button
          className={scss.closeButton}
          type="button"
          onClick={() => onClose(false)}
        >
          <svg className={scss.closeIcon} width="20" height="20">
            <use href={sprite + '#close'}></use>
          </svg>
        </button>
      ) : (
        <Header />
      )}

      <h2 className={scss.modalTitle}>Add transactions</h2>

      <form className={scss.modalForm} onSubmit={handleSubmit}>
        <div className={scss.checkboxContainer}>
          <p
            className={
              checked !== true
                ? scss.textLeft
                : [scss['textLeft'], scss['isNotActive']].join(' ')
            }
          >
            Income
          </p>

          <input
            onChange={() => setChecked(!checked)}
            id="checkbox"
            type="checkbox"
            name="type"
            value={checked === true ? 'EXPENSE' : 'INCOME'}
            checked={checked}
            className={scss.checkbox}
          />

          <label htmlFor="checkbox" className={scss.checkboxLabel}>
            <span className={scss.checkboxSlider}>
              <svg className={scss.plus} width="20" height="20">
                <use id="plus" href={sprite + '#untitled'} />
              </svg>
              <svg className={scss.minus} width="20" height="20">
                <use id="minus" href={sprite + '#minus'} />
              </svg>
            </span>
          </label>

          <p
            className={
              checked === true
                ? scss.textRight
                : [scss['textRight'], scss['isNotActive']].join(' ')
            }
          >
            Expense
          </p>
        </div>

        <div onClick={toggleClass} className={scss.select} tabIndex="0">
          <div
            className={
              categoryName === 'Select a category'
                ? scss.selectHeader
                : [scss['selectHeader'], scss['isChosen']].join(' ')
            }
          >
            {categoryName}
          </div>

          <svg className={scss.selectIcon} width="40" height="19">
            <use href={sprite + '#icon-select-arrow'}></use>
          </svg>

          <ul
            className={
              selectActive
                ? [scss['selectBody'], scss['isActive']].join(' ')
                : scss.selectBody
            }
          >
            {checked === true
              ? expenseCategory.map(category => {
                  return (
                    <li
                      className={scss.selectItem}
                      key={category.id}
                      id={category.id}
                      onClick={handleCategoryId}
                      tabIndex="0"
                    >
                      {category.name}
                    </li>
                  );
                })
              : incomeCategory.map(category => {
                  return (
                    <li
                      className={scss.selectItem}
                      key={category.id}
                      id={category.id}
                      onClick={handleCategoryId}
                      tabIndex="0"
                    >
                      {category.name}
                    </li>
                  );
                })}
          </ul>

          <input
            className={scss.hiddenInput}
            name="categoryId"
            id="category"
            placeholder="Select a category"
            onChange={handleCategoryId}
            value={categoryId}
            required
          />
        </div>

        <div className={scss.inputsContainer}>
          <input
            onChange={event =>
              setAmount(
                checked === true
                  ? -Math.abs(Number(event.target.value))
                  : Math.abs(Number(event.target.value))
              )
            }
            type="number"
            name="amount"
            placeholder="0.00"
            className={
              amount === ''
                ? [scss['inputField'], scss['empty']].join(' ')
                : scss.inputField
            }
            onFocus={handleAmountClick}
            value={amount === '' ? '' : '' + Math.abs(amount)}
            required
          />

          <label className={scss.inputLabel} htmlFor="amount"></label>

          <label htmlFor="date" className={scss.dateLabel}>
            <Datetime
              inputProps={{
                className: scss.inputFieldDate,
                name: 'transactionDate',
                required: true,
              }}
              dateFormat="DD/MM/YYYY"
              timeFormat={false}
              closeOnSelect={true}
              initialValue={new Date()}
            />

            <svg className={scss.dateIcon} width="24" height="24">
              <use href={sprite + '#calendar'}></use>
            </svg>
          </label>
        </div>

        <textarea
          onChange={event => setComment(event.target.value)}
          type="text"
          name="comment"
          placeholder="Comment"
          className={scss.inputFieldComment}
          value={comment}
        />
        <label className={scss.inputLabel} htmlFor="comment"></label>

        <div className={scss.buttonsThumb}>
          <button type="submit" className={scss.submitButton}>
            ADD
          </button>

          <button
            type="button"
            className={scss.cancelButton}
            onClick={() => onClose(false)}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}
