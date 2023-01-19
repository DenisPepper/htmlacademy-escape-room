import AppHeaderSideNav from '../app-header-side-nav/app-header-side-nav';
import AppHeaderMainNav from '../app-header-main-nav/app-header-main-nav';
import AppHeaderLogo from '../app-header-logo/app-header-logo';

export default function AppHeader():JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <AppHeaderLogo />
        <AppHeaderMainNav />
        <AppHeaderSideNav/>
      </div>
    </header>
  );
}
