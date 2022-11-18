import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import PasswordStrengthBar from 'react-password-strength-bar';
import Button from 'components/Button/Button';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import sprite from 'assets/images/sprite.svg';

import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/session';
// import { register as registerAction } from 'reduxOld/session/auth-operation';

import css from 'components/Form/Form.module.scss';

const SignInForm = ({ userRegister }) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = data => {
    const { username, email, password } = data;
    if (userRegister) {
      const userData = { username, email, password };
      dispatch(authOperation.registerThunk(userData));
      return userData;
    } else {
      const userData = { email, password };
      dispatch(authOperation.logInThunk(userData));
      return userData;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.formField}>
        <svg className={css.formIcon}>
          <use href={`${sprite}#icon-mail`}></use>
        </svg>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className={css.formInput}
          {...register('email', {
            required: {
              value: true,
              message: 'You need to provide an email',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Incorrectly email',
            },
          })}
        />
      </div>
      {errors.email && (
        <div className={css.errorMessageWrapper}>
          <svg className={css.errorIcon}>
            <use href={`${sprite}#icon-warning`}></use>
          </svg>
          <p className={css.errorMessage}>{errors.email.message}</p>
        </div>
      )}
      <div className={css.formField}>
        <svg className={css.formIcon}>
          <use href={`${sprite}#icon-lock`}></use>
        </svg>
        <input
          className={css.formInput}
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'You must specify a password',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
        />
      </div>
      {errors.password && (
        <div className={css.errorMessageWrapper}>
          <svg className={css.errorIcon}>
            <use href={`${sprite}#icon-warning`}></use>
          </svg>
          <p className={css.errorMessage}>{errors.password.message}</p>
        </div>
      )}
      {userRegister ? (
        <>
          <div className={[css.formField, css.formPasswordField].join(' ')}>
            <svg className={css.formIcon}>
              <use href={`${sprite}#icon-lock`}></use>
            </svg>
            <input
              type="password"
              placeholder="Confirm password"
              className={[css.formInput, css.formPasswordInput].join(' ')}
              {...register('password_repeat', {
                validate: value =>
                  value === password.current || 'The passwords do not match',
              })}
            />
          </div>
          <PasswordStrengthBar password={password.current} />
          {errors.password_repeat && (
            <div className={css.errorMessageWrapper}>
              <svg className={css.errorIcon}>
                <use href={`${sprite}#icon-warning`}></use>
              </svg>
              <p className={css.errorMessage}>
                {errors.password_repeat.message}
              </p>
            </div>
          )}

          <div className={css.formField}>
            <svg className={css.formIcon}>
              <use href={`${sprite}#icon-person`}></use>
            </svg>
            <input
              type="text"
              placeholder="First name"
              className={css.formInput}
              {...register('username', {
                required: false,
                maxLength: {
                  value: 12,
                  message: 'First name must be np more than 12 characters',
                },
                minLength: {
                  value: 1,
                  message: 'First name must have at least 1 characters',
                },
              })}
            />
          </div>
          {errors.firstName && (
            <div className={css.errorMessageWrapper}>
              <svg className={css.errorIcon}>
                <use href={`${sprite}#icon-warning`}></use>
              </svg>
              <p className={css.errorMessage}>{errors.firstName.message}</p>
            </div>
          )}

          <div className={css.buttonWrapper}>
            <Button buttonType="submit" text="REGISTER" />
            <ButtonLink text="LOG IN" navigateTo="/signin" />
          </div>
        </>
      ) : (
        <div className={css.buttonWrapper}>
          <Button buttonType="submit" text="LOG IN" />
          <ButtonLink text="REGISTER" navigateTo="/signup" />
        </div>
      )}
    </form>
  );
};

export default SignInForm;
