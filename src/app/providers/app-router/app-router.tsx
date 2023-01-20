import { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoutes} from '../../../shared/config/routes-config';

import AppLayout from '../../../widgets/app-layout/app-layout';

import MainPage from '../../../pages/main-page/main-page-async';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import ContactPage from '../../../pages/contact-page/contact-page';
import MyQuestsPage from '../../../pages/my-quests-page/my-quests-page';
import BookingPage from '../../../pages/booking-page/booking-page';
import AuthPage from '../../../pages/auth-page/auth-page';
import QuestPage from '../../../pages/quest-page/quest-page';

import RequireAuth from '../../../shared/lib/require-auth/require-auth';


export function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path={AppRoutes.Main} element={<AppLayout />}>
          <Route index element={<MainPage />}/>
          <Route path={AppRoutes.Quest} element={<QuestPage />}/>
          <Route path={AppRoutes.Contact} element={<ContactPage />}/>
          <Route
            path={AppRoutes.MyQuests}
            element={
              <RequireAuth>
                <MyQuestsPage />
              </RequireAuth>
            }
          />
          <Route
            path={AppRoutes.Booking}
            element={
              <RequireAuth>
                <BookingPage />
              </RequireAuth>
            }
          />
          <Route path={AppRoutes.Auth} element={<AuthPage />}/>
        </Route>
        <Route path={AppRoutes.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </Suspense>
  );
}
