import AppQuestCardImage from '../app-quest-card-image/app-quest-card-image';
import AppQuestCardContent from '../app-quest-card-content/app-quest-card-content';
import {QuestReducedInfo} from '../../shared/types/quest-types';


interface AppQuestCardProps {
  quest: QuestReducedInfo;
}

export default function AppQuestCard(props: AppQuestCardProps) {
  const {quest} = props;

  return (
    <div className="quest-card">
      <AppQuestCardImage
        altText={quest.title}
        previewImg={quest.previewImg}
        previewImgWebp={quest.previewImgWebp}
      />
      <AppQuestCardContent
        title={quest.title}
        level={quest.level}
        peopleMinMax={quest.peopleMinMax}
      />
    </div>
  );
}

