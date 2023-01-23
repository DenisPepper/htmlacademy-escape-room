import {Outlet} from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import Svg from '../../shared/svg/svg';
import AppFooter from '../app-footer/app-footer';


export default function AppLayout(): JSX.Element {
  return (
    <div className={'wrapper'}>
      <Svg/>
      <AppHeader/>
      <Outlet />
      <AppFooter />
    </div>
  );
}
