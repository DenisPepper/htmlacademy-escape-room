import AppAnchor from '../../shared/ui/app-anchor/app-anchor';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../app/providers/store-provider/slices/auth/selectors/get-auth-status/get-auth-status';
import {buildNames} from '../../shared/lib/build-names/build-names';
import { useLayoutEffect, useState} from 'react';
import {Logout} from '../../app/providers/store-provider/slices/auth/services/logout';
import {Login} from '../../app/providers/store-provider/slices/auth/services/login';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';

export default function AppHeaderAuthButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(getAuthStatus) === 'YES';

  const [isDisabled, setIsDisabled] = useState(() => false);

  const handleOnClick = () => {
    setIsDisabled((prev) => true);
    isAuth ? dispatch(Logout()) : dispatch(Login({email: 'qwet@mail.ry', password: '159;lk'}));
  };

  useLayoutEffect(() => {
    setIsDisabled(false);
  }, [isAuth]);

  // eslint-disable-next-line no-console
  console.log('render');

  const cssClassNames = buildNames(
    ['btn', 'header__side-item'],
    {
      'btn--accent': isAuth,
      disabled: isDisabled}
  );

  return (
    <AppAnchor
      outClassNames={cssClassNames}
      callback={handleOnClick}
    >
      {isAuth ? 'Выйти' : 'Войти'}
    </AppAnchor>
  );
}
