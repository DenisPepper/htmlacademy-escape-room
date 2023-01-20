import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {DECIMAL_RADIX} from '../../shared/config/settings-config';
import {FetchQuestById} from '../../app/providers/store-provider/slices/quests/services/fetch-quest-by-id';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';

import AppSpinner from '../../shared/ui/app-spinner/app-spinner';
import AppQuestPageContent from '../../widgets/app-quest-page-content/app-quest-page-content';
import {
  GetQuestLoadingStatus
} from '../../app/providers/store-provider/slices/quests/selectors/get-quest-loading-status/get-quest-loading-status';


export default function QuestPage(): JSX.Element {
  const {id = ''} = useParams();
  const questID = parseInt(id, DECIMAL_RADIX);
  const dispatch = useAppDispatch();
  const isLoading = useSelector(GetQuestLoadingStatus);

  useEffect(
    () => {
      dispatch(FetchQuestById({id:questID}));
    },
    [questID]);

  // eslint-disable-next-line no-console
  console.log('render QuestPage');

  return (
    <main className={'decorated-page quest-page'}>
      {isLoading ? <AppSpinner/> : <AppQuestPageContent/>}
    </main>
  );
}


