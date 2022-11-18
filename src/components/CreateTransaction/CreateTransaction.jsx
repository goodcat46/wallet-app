import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import Modal from 'components/Modal/Modal';
import FormAddTransaction from 'components/ModalAddTransactions/ModalAddTransactions';

const CreateTransaction = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector('body').classList.add('NotScroll');
    }
    return () => {
      document.querySelector('body').classList.remove('NotScroll');
    };
  }, [isModalOpen]);

  return (
    <>
      {pathname === '/dashboard/transactions' && (
        <ButtonAddTransactions onClick={toggleModal} />
      )}
      {isModalOpen && (
        <Modal defaultButton={false} handleToggle={toggleModal}>
          <FormAddTransaction onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default CreateTransaction;
