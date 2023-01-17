import {Login} from '../../app/providers/store-provider/slices/auth/services/login';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(Login({email: 'qwet@mail.ry', password: ''}));
  };

  return (
    <div>
      <button type="button" onClick={handleOnClick}>Login</button>
    </div>
  );
}
