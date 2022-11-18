import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal/ModalPortal';
import css from './modal.module.css';

export const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);
//* ""isOpenModal"" стейт який тримається у елементі що рендерить по умові модалку
//* ""handleToggle"" функція яка тоглить стейт модалки
//* ""defaultBtn"" BOOLEAN чи потрібна дефолтна кнопка закриття
//* ""children"" вміст модалки
const Modal = ({ isOpenModal, handleToggle, defaultBtn, children }) => {
  window.addEventListener('keydown', handleToggleModalByEsc);

  function handleToggleModalBackdrop(evt) {
    let { target, currentTarget } = evt;
    if (target === currentTarget) {
      handleToggle();
    }
  }

  function handleToggleModalByEsc(evt) {
    let { code } = evt;
    if (code === 'Escape') {
      handleToggle();
      window.removeEventListener('keydown', handleToggleModalByEsc);
    }
  }
  useEffect(() => {
    if (isOpenModal) {
      document.querySelector('body').classList.add('NotScroll');
    }
    return () => {
      document.querySelector('body').classList.remove('NotScroll');
    };
  }, [isOpenModal]);

  return (
    <ModalPortal>
      <ModalContext.Provider value={{ isOpenModal, handleToggle }}>
        <div className={css.Backdrop} onClick={handleToggleModalBackdrop}>
          <div className={css.Modal}>
            {children}
            {defaultBtn && (
              <button className={css.closeModal} onClick={() => handleToggle()}>
                Close
              </button>
            )}
          </div>
        </div>
      </ModalContext.Provider>
    </ModalPortal>
  );
};

Modal.propTypes = {
  isOpenModal: PropTypes.bool,
  handleToggle: PropTypes.func,
  defaultBtn: PropTypes.bool,
  // ! children: PropTypes.typeOf([]),
};

export default Modal;
