import {AppRouter} from './providers/app-router/app-router';
import {useAppDispatch} from '../shared/lib/hooks/useAppDispatch';
import {CheckAuth} from './providers/store-provider/slices/auth/services/check-auth';
import {FetchAllQuests} from './providers/store-provider/slices/quests/services/fetch-all-quests';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(CheckAuth());
  dispatch(FetchAllQuests());

  return <AppRouter/>;
}
