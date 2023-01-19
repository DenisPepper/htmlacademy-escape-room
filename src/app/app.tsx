import {AppRouter} from './providers/router/app-router';
import {useAppDispatch} from '../shared/lib/hooks/useAppDispatch';
import {CheckAuth} from './providers/store-provider/slices/auth/services/check-auth';
import {FetchQuests} from './providers/store-provider/slices/quests/services/fetch-quests';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(CheckAuth());
  dispatch(FetchQuests());

  return <AppRouter/>;
}
