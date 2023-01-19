import {Login} from '../../app/providers/store-provider/slices/auth/services/login';
import {Logout} from '../../app/providers/store-provider/slices/auth/services/logout';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {CheckAuth} from '../../app/providers/store-provider/slices/auth/services/check-auth';
import {FetchQuests} from '../../app/providers/store-provider/slices/quests/services/fetch-quests';
import {
  getQuestsList
} from '../../app/providers/store-provider/slices/quests/selectors/get-quests-list/get-quests-list';
import {useSelector} from 'react-redux';


export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const quests = useSelector(getQuestsList);

  const handleOnClickLogin = () => {
    dispatch(Login({email: 'qwet@mail.ry', password: '159;lk'}));
  };

  const handleOnClickLogout = () => {
    dispatch(Logout());
  };

  const handleOnClickCheckAuth = () => {
    dispatch(CheckAuth());
  };

  const handleOnClickFetch = () => {
    dispatch(FetchQuests());
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleOnClickFetch}>Fetch quests</button>
        <button type="button" onClick={handleOnClickLogin}>Login</button>
        <button type="button" onClick={handleOnClickLogout}>Logout</button>
        <button type="button" onClick={handleOnClickCheckAuth}>Check auth</button>
      </div>
      <div>
        {quests.map((quest) => (<div key={quest.id}>{quest.title}</div>))}
      </div>
    </>
  );
}
