import React from 'react';
import { Link } from 'react-router-dom';
import LogOutConfirm from './LogOutConfirm/LogOutConfirm';
import { useSelector } from 'react-redux';
import { getSessionInfo } from 'redux/session/session-selectors';

import logoImg from '../../assets/images/logo.png';

import scss from './Header.module.scss';

const Header = props => {
  const {
    user: { username },
    isAuth,
  } = useSelector(getSessionInfo);
  return (
    <div className={scss.Header}>
      <div className={['container', scss.wrapper].join(' ')}>
        <Link to="/">
          <div className={scss.logoBox}>
            <img className={scss.logoImg} src={logoImg} alt="logo" />
            <span className={scss.logoText}>Wallet</span>
          </div>
        </Link>
        {isAuth && (
            <div className={scss.wrapper}>
              <span className={scss.userName}>{username}</span>

              <LogOutConfirm />
            </div>
          ) && (
            <div className={scss.wrapper}>
              <span className={scss.userName}>{username}</span>

              <LogOutConfirm />
            </div>
          )}
      </div>
    </div>
  );
};

export default Header;
