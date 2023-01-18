import AppAnchor from '../../shared/ui/app-anchor/app-anchor';
import AppHeaderAuthButton from '../app-header-auth-button/app-header-auth-button';

export default function AppHeaderSideNav(): JSX.Element {
  return (
    <div className="header__side-nav">
      <AppHeaderAuthButton />

      <AppAnchor
        outClassNames={'link header__side-item header__phone-link'}
        href={'tel:88003335599'}
      >
        8 (000) 111-11-11
      </AppAnchor>
    </div>
  );
}

//<a className="btn btn--accent header__side-item">Выйти</a>

//<a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
