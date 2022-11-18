import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

import s from './AppLoader.module.scss';
const AppLoader = ({
  isLoading = false,

  black = true,
  spinerHeight = 80,
  spinerWidth = 80,
  blur = 0,
  backgroundColor = null,
  styles,
  ...others
}) => {
  const typeClass = global ? s.BackdropGlobal : s.BackdropLocal;
  const colorClass = black ? s.BackdropBlack : s.BackdropWhite;

  useEffect(() => {
    if (isLoading) {
      document.querySelector('body').classList.add(s.NotScroll);
    }
    return () => {
      document.querySelector('body').classList.remove(s.NotScroll);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div style={styles} className={[typeClass, colorClass].join(' ')}>
          <Oval
            height={spinerHeight}
            width={spinerWidth}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </>
  );
};

AppLoader.propTypes = {
  isLoading: PropTypes.bool,
};

export default AppLoader;
