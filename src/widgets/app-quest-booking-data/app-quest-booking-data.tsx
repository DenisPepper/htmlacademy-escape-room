import AppQuestBookingTitle from '../app-quest-booking-title/app-quest-booking-title';

interface AppQuestBookingDataProps {
  id: number;
  title: string;
}

export default function AppQuestBookingData(props: AppQuestBookingDataProps) {
  const {id, title} = props;

  return (
    <div className="container container--size-s">
      <AppQuestBookingTitle title={title}/>
    </div>
  );

}
