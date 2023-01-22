import AppAuthMain from '../../widgets/app-auth-main/app-auth-main';
import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../app/providers/store-provider/slices/auth/selectors/get-auth-status/get-auth-status';
import {AppRoutes} from '../../shared/config/routes-config';

export default function AuthPage(): JSX.Element {
  let pathAfterLogin = AppRoutes.Main as string;
  const location = useLocation();
  if (location.state) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    pathAfterLogin = `${AppRoutes.Quest.replace(/:id/, location.state.id)}`;
  }

  const isAuth = useSelector(getAuthStatus) === 'YES';

  return isAuth ? <Navigate to={pathAfterLogin}/> : <AppAuthMain/>;
}
