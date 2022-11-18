import React, { useState } from 'react';

import ButtonLink from 'components/ButtonLink/ButtonLink';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { sprite } from 'assets/images/sprite';

import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/session';
import { financeSlice } from 'redux/finance';

import s from './LogOutConfirm.module.scss';

const LogOutConfirm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  function onToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function onConfrimLogOut() {
    onToggleModal();

    dispatch(financeSlice.resetFinance());
    dispatch(authOperation.logOutThunk());
  }
  function onDeclineLogOut() {
    onToggleModal();
  }
  return (
    <>
      <button className={s.exitBtn} type="button" onClick={onToggleModal}>
        <svg className={s.svg}>
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        <span className={s.exitText}>Exit</span>
      </button>
      {isModalOpen && (
        <Modal handleToggle={onToggleModal} isOpenModal={isModalOpen}>
          <div className={s.LogOutConfirm}>
            <p className={s.logoutMessage}>You really want to log out?</p>

            <div className={s.buttonWrapper}>
              <ButtonLink type="button" text="YES" onClick={onConfrimLogOut} />

              <Button type="button" text="NO" onClick={onDeclineLogOut} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LogOutConfirm;
