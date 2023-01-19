import {
  getAuthStatus
} from '../../../app/providers/store-provider/slices/auth/selectors/get-auth-status/get-auth-status';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../config/routes-config';

interface RequireAuthProps {
  children: JSX.Element;
}

export default function RequireAuth(props: RequireAuthProps): JSX.Element {
  const { children } = props;

  const isAuth = useSelector(getAuthStatus) === 'YES';

  return isAuth ? children : <Navigate to={AppRoutes.Auth}/>;
}
