import {Outlet} from 'react-router-dom';
import AppHeader from '../app-header/app-header';


export default function AppLayout(): JSX.Element {
  return (
    <div className={'wrapper'}>
      <AppHeader/>
      <Outlet />
    </div>
  );
}
