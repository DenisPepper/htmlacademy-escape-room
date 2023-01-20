import {useSelector} from 'react-redux';
import {
  GetLastLoadedQuest
} from '../../app/providers/store-provider/slices/quests/selectors/get-last-loaded-quest/get-last-loaded-quest';
import AppQuestContentPicture from '../app-quest-content-picture/app-quest-content-picture';

export default function AppQuestPageContent(): JSX.Element {
  const quest = useSelector(GetLastLoadedQuest);

  // eslint-disable-next-line no-console
  console.log(quest);

  return quest ? <AppQuestContentPicture/> : <div>данные не загружены</div>;
}


