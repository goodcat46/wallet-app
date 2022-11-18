import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Form from 'components/Form/Form';
import {
  logo,
  desktopImageSignUp,
  desktopImageSignUp2x,
  tabletImageSignUp,
  tabletImageSignUp2x,
  desktopImage,
  desktopImage2x,
  tabletImage,
  tabletImage2x,
} from 'assets/images';

import css from './AuthPage.module.scss';

const AuthPage = ({ forRegister }) => {
  return (
    <div className={css.section}>
      <div className={`${css.pageContainer} container`}>
        <div className={css.titleWrapper}>
          {!forRegister ? (
            <>
              <picture>
                <source
                  srcSet={`${desktopImageSignUp} 1x, ${desktopImageSignUp2x} 2x`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${tabletImageSignUp} 1x, ${tabletImageSignUp2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  src={`${tabletImageSignUp} 1x`}
                  alt="Background"
                  className={css.backgroundImage}
                />
              </picture>
            </>
          ) : (
            <>
              <picture>
                <source
                  srcSet={`${desktopImage} 1x, ${desktopImage2x} 2x`}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={`${tabletImage} 1x, ${tabletImage2x} 2x`}
                  media="(min-width: 768px)"
                />
                <img
                  src={`${tabletImage} 1x`}
                  alt="Background"
                  className={css.backgroundImage}
                />
              </picture>
            </>
          )}
          <h1 className={css.title}>Finance App</h1>
        </div>
        <div className={css.formContainer}>
          <Link to="/">
            <div className={css.formTitleWrapper}>
              <img src={logo} alt="Logo" className={css.logo} />
              <h1 className={css.formTitle}>Wallet</h1>
            </div>
          </Link>

          {forRegister ? <Form userRegister /> : <Form />}
        </div>
      </div>
    </div>
  );
};

AuthPage.propTypes = {
  forRegister: PropTypes.bool,
};
export default AuthPage;
