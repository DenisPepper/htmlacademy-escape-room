import AppLink from '../../shared/ui/app-link/app-link';
import {AppRoutes} from '../../shared/config/routes-config';

export default function AppHeaderMainNav(): JSX.Element {
  return (
    <nav className="main-nav header__main-nav">

      <ul className="main-nav__list">
        <li className="main-nav__item">
          <AppLink to={AppRoutes.Main}>Квесты</AppLink>
        </li>
        <li className="main-nav__item">
          <AppLink to={AppRoutes.Contact}>Контакты</AppLink>
        </li>
        <li className="main-nav__item">
          <AppLink to={AppRoutes.MyQuests}>Мои бронирования</AppLink>
        </li>
      </ul>

    </nav>
  );
}
