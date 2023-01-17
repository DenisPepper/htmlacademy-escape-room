import {Login} from '../../app/providers/store-provider/slices/auth/services/login';
import {Logout} from '../../app/providers/store-provider/slices/auth/services/logout';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';


export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOnClickLogin = () => {
    dispatch(Login({email: 'qwet@mail.ry', password: '159;lk'}));
  };

  const handleOnClickLogout = () => {
    dispatch(Logout());
  };

  return (
    <div>
      <button type="button" onClick={handleOnClickLogin}>Login</button>
      <button type="button" onClick={handleOnClickLogout}>Logout</button>
    </div>
  );
}
