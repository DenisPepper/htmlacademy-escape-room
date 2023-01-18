import {Login} from '../../app/providers/store-provider/slices/auth/services/login';
import {Logout} from '../../app/providers/store-provider/slices/auth/services/logout';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {CheckAuth} from '../../app/providers/store-provider/slices/auth/services/check-auth';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOnClickLogin = () => {
    dispatch(Login({email: 'qwet@mail.ry', password: '159;lk'}));
  };

  const handleOnClickLogout = () => {
    dispatch(Logout());
  };

  const handleOnClickCheckAuth = () => {
    dispatch(CheckAuth());
  };

  return (
    <div>
      <button type="button" onClick={handleOnClickLogin}>Login</button>
      <button type="button" onClick={handleOnClickLogout}>Logout</button>
      <button type="button" onClick={handleOnClickCheckAuth}>Check auth</button>
    </div>
  );
}
