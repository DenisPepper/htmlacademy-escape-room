import AppPageTitle from '../../widgets/app-page-title/app-page-title';
import AppFilterForm from '../../widgets/app-filter-form/app-filter-form';
import AppPageHiddenTitle from '../../widgets/app-page-hidden-title/app-page-hidden-title';
import AppQuestsList from '../../widgets/app-quests-list/app-quests-list';

export default function MainPage(): JSX.Element {
  return (
    <main className={'page-content'}>
      <div className={'container'}>
        <AppPageTitle mainTitle={'Выберите тематику'} subTitle={'квесты в Санкт-Петербурге'}></AppPageTitle>
        <AppFilterForm/>
        <AppPageHiddenTitle textContent='Выберите квест'/>
        <AppQuestsList />
      </div>
    </main>
  );
}


/*
<button type="button" onClick={handleOnClickFetch}>Fetch quests</button>
        <button type="button" onClick={handleOnClickLogin}>Login</button>
        <button type="button" onClick={handleOnClickLogout}>Logout</button>
        <button type="button" onClick={handleOnClickCheckAuth}>Check auth</button>
        <div>
          {quests.map((quest) => (<div key={quest.id}>{quest.title}</div>))}
        </div>
 */


/*

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
    dispatch(FetchAllQuests());
  };

 */
