import {Outlet} from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import Svg from '../../shared/svg/svg';

export default function AppLayout(): JSX.Element {
  return (
    <div className={'wrapper'}>
      <Svg/>
      <AppHeader/>
      <Outlet />
    </div>
  );
}
