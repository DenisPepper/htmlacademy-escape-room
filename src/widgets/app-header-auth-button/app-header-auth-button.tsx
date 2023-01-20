import AppAnchor from '../../shared/ui/app-anchor/app-anchor';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../app/providers/store-provider/slices/auth/selectors/get-auth-status/get-auth-status';
import {buildNames} from '../../shared/lib/build-names/build-names';
import {MutableRefObject, useLayoutEffect, useRef, useState} from 'react';
import {Logout} from '../../app/providers/store-provider/slices/auth/services/logout';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../shared/config/routes-config';

const TIMER_DELAY = 5000;

export default function AppHeaderAuthButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getAuthStatus) === 'YES';

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(() => false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const handleOnLogout = () => {
    setIsDisabled((prev) => true);
    timerRef.current = setTimeout(() => {
      setIsDisabled((prev) => false);
    }, TIMER_DELAY);
    dispatch(Logout());
  };

  const handleOnNavigateToAuthPage = () => navigate(AppRoutes.Auth);

  useLayoutEffect(() => {
    clearTimeout(timerRef.current);
    setIsDisabled(false);
  }, [isAuth, timerRef]);

  const classNames = buildNames(
    ['btn', 'header__side-item'],
    {
      'btn--accent': isAuth,
      disabled: isDisabled}
  );

  return (
    <AppAnchor
      outClassNames={classNames}
      callback={ isAuth ? handleOnLogout : handleOnNavigateToAuthPage}
    >
      {isAuth ? 'Выйти' : 'Войти'}
    </AppAnchor>
  );
}

/*

const handleOnClick = () => {
    setIsDisabled((prev) => true);
    timerRef.current = setTimeout(() => {
      setIsDisabled((prev) => false);
    }, TIMER_DELAY);
    isAuth ? dispatch(Logout()) : dispatch(Login({email: 'qwet@mail.ry', password: '159;lk'}));
  };

 */
