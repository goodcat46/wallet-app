import React from 'react';
import Balance from 'components/Balance/Balance';

import NavBar from 'components/AppBar/NavBar/NavBar';
import Currency from 'components/Currency';
import { NotMobile } from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div className={scss.appBarWrapper}>
      <div className={scss.AppBar}>
        <NavBar />

        <NotMobile>
          <Balance />
        </NotMobile>
      </div>

      <NotMobile>
        <Currency />
      </NotMobile>
    </div>
  );
};

export default AppBar;
