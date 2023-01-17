import {Route, Routes} from 'react-router-dom';
import {AppRoutes} from '../../../shared/config/routes-config';

import AppLayout from '../../../widgets/app-layout/app-layout';

import MainPage from '../../../pages/main-page/main-page';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import ContactPage from '../../../pages/contact-page/contact-page';
import MyQuestsPage from '../../../pages/my-quests-page/my-quests-page';


export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<AppLayout />}>
        <Route index element={<MainPage />}/>
        <Route path={AppRoutes.NotFound} element={<NotFoundPage/>}/>
        <Route path={AppRoutes.Contact} element={<ContactPage />}/>
        <Route path={AppRoutes.MyQuests} element={<MyQuestsPage />}/>
      </Route>
    </Routes>
  );
}
