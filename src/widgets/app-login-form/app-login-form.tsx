import React, {useState} from 'react';
import {validateAuthForm} from '../../shared/lib/validate-auth-form/validate-auth-form';
import {Login} from '../../app/providers/store-provider/slices/auth/services/login';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';


export default function AppLoginForm(): JSX.Element {
  const [email, setEmail] = useState(() => '');
  const [password, setPassword] = useState(() => '');
  const [isChecked, setIsChecked] = useState(() => false);
  const dispatch = useAppDispatch();

  const handleOnEmailInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleOnPasswordInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleOnChangeUserAgreement = () => {
    setIsChecked((prev) =>!prev);
  };

  const handleOnSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (validateAuthForm({email, password, isChecked}) ) {
      dispatch(Login({email, password}));
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleOnSubmit} className="login-form" action="https://echo.htmlacademy.ru/" method="post">
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">

          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;–&nbsp;mail</label>
            <input value={email} onInput={handleOnEmailInput} type="email" id="email" name="email" placeholder="Адрес электронной почты" required/>
          </div>

          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input value={password} onInput={handleOnPasswordInput} autoComplete='off' type="password" id="password" name="password" placeholder="Пароль" required/>
          </div>
        </div>

        <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>

      </div>

      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleOnChangeUserAgreement} id="id-order-agreement" name="user-agreement" required/>
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>

        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}
