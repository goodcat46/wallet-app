import React, { useState } from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { useDispatch } from 'react-redux';
import {
  editTransactionThunk,
  deleteTransactionThunk,
} from 'redux/finance/finance-operation';

import { categoryIdArr } from '../Constants';

import s from './RowForm.module.scss';

const RowBottomForm = () => {
  const { valueToString, rowData, handleRowBottomFormClose, typesArr } =
    useRowContext();
  const [type, setType] = useState({ name: '' });
  const [category, setCategory] = useState({ name: '' });
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    transactionDate: rowData.transactionDate,
    type: type.name || rowData.type,
    categoryId: category.id || rowData.categoryId,
    comment: rowData.comment,
    amount: rowData.amount,
  });

  function handleFormSubmit(ev) {
    ev.preventDefault();
    handleRowBottomFormClose(ev);
    dispatch(editTransactionThunk({ id: rowData.id, transaction: formData }));
  }
  function handleDeletBtnClick(ev) {
    ev.preventDefault();
    handleRowBottomFormClose(ev);
    dispatch(deleteTransactionThunk(rowData.id));
  }

  function handleChangeinput(ev) {
    const {
      target: { name, value },
    } = ev;

    setFormData({ ...formData, [name]: value });
  }
  function onSelectCategoryClick({ evt, item }) {
    setCategory(item);
  }
  function onSelectTypeClick({ evt, item }) {
    setType(item);
  }
  function handleSelectOpen(ev) {
    let { currentTarget } = ev;
    currentTarget.classList.toggle(s.isOpen);
  }
  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <div className={s.inputs}>
          <label htmlFor="type">Type</label>
          <div className={s.customSelect} onClick={handleSelectOpen}>
            <span className={s.celectField}>{type.name ? type.name : ''}</span>
            <ul className={s.selectList}>
              {typesArr.map(item => (
                <li
                  key={item.id}
                  className={s.selectItem}
                  data-title={item.dataTitle}
                  onClick={evt => {
                    onSelectTypeClick({ evt, item });
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <label htmlFor="category">Category</label>
          <div className={s.customSelect} onClick={handleSelectOpen}>
            <span className={s.celectField}>
              {category.name ? category.name : ''}
            </span>
            <ul className={s.selectList}>
              {categoryIdArr.map(item => (
                <li
                  key={item.id}
                  className={s.selectItem}
                  data-title={item.dataTitle}
                  onClick={evt => {
                    onSelectCategoryClick({ evt, item });
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <label htmlFor="transactionDate">Date</label>
          <input
            className={s.input}
            onChange={handleChangeinput}
            type="date"
            name="transactionDate"
            id="transactionDate"
            value={formData.transactionDate}
            placeholder="transactionDate"
          />
          <label htmlFor="amount">Amount</label>
          <input
            className={s.input}
            onChange={handleChangeinput}
            type="text"
            name="amount"
            id="amount"
            value={valueToString(formData.amount)}
            placeholder="amount"
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            className={s.textarea}
            onChange={handleChangeinput}
            name="comment"
            id="comment"
            value={formData.comment}
            placeholder="comment"
          ></textarea>
        </div>
        <div className={s.buttons}>
          <button className={[s.button, s.accept].join(' ')} type="submit">
            Accept
          </button>
          <button
            className={[s.button, s.cancel].join(' ')}
            onClick={handleRowBottomFormClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className={[s.button, s.delete].join(' ')}
            onClick={handleDeletBtnClick}
            type="button"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default RowBottomForm;
