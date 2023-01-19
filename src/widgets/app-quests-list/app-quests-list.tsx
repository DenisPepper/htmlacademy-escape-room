import {useSelector} from 'react-redux';
import {
  getQuestsList
} from '../../app/providers/store-provider/slices/quests/selectors/get-quests-list/get-quests-list';
import AppQuestCard from '../app-quest-card/app-quest-card';

export default function AppQuestsList() {
  const quests = useSelector(getQuestsList);

  return(
    <div className="cards-grid">
      {quests.map( (quest) => <AppQuestCard key={quest.id} quest={quest}/> )}
    </div>
  );
}
