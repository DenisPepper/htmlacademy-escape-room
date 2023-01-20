import {useSelector} from 'react-redux';
import {
  GetLastLoadedQuest
} from '../../app/providers/store-provider/slices/quests/selectors/get-last-loaded-quest/get-last-loaded-quest';
import AppQuestContentPicture from '../app-quest-content-picture/app-quest-content-picture';
import AppQuestContentData from '../app-quest-content-data/app-quest-content-data';

export default function AppQuestPageContent(): JSX.Element {
  const quest = useSelector(GetLastLoadedQuest);

  return quest ?
    <>
      <AppQuestContentPicture
        previewImg={quest.previewImg}
        previewImgWebp={quest.previewImgWebp}
        coverImg={quest.coverImg}
        coverImgWebp={quest.coverImgWebp}
      />
      <AppQuestContentData
        title={quest.title}
        type={quest.type}
        level={quest.level}
        description={quest.description}
        peopleMinMax={quest.peopleMinMax}
      />
    </>
    :
    <div>данные не загружены</div>;
}


