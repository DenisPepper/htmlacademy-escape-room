import {useSelector} from 'react-redux';
import {
  GetLastLoadedQuest
} from '../../app/providers/store-provider/slices/quests/selectors/get-last-loaded-quest/get-last-loaded-quest';
import AppQuestContentPicture from '../../widgets/app-quest-content-picture/app-quest-content-picture';
import AppQuestBookingData from '../../widgets/app-quest-booking-data/app-quest-booking-data';


export default function BookingPage(): JSX.Element {
  const quest = useSelector(GetLastLoadedQuest);

  return quest ?
    <main className="page-content decorated-page">
      <AppQuestContentPicture
        previewImg={quest.previewImg}
        previewImgWebp={quest.previewImgWebp}
        coverImg={quest.coverImg}
        coverImgWebp={quest.coverImgWebp}
      />
      <AppQuestBookingData
        id={quest.id}
        title={quest.title}
      />
    </main>
    :
    <div>данные не загружены</div>;
}
