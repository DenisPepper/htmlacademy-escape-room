import AppQuestBookingTitle from '../app-quest-booking-title/app-quest-booking-title';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {
  GetBookingLoadingStatus
} from '../../app/providers/store-provider/slices/booking/selectors/get-booking-loading-status/get-booking-loading-status';
import {useSelector} from 'react-redux';
import AppQuestBookingMap from '../app-quest-booking-map/app-quest-booking-map';
import {
  FetchBookingInfoById
} from '../../app/providers/store-provider/slices/booking/services/fetch-booking-info-by-id';
import {useEffect} from 'react';
import AppQuestBookingForm from '../app-quest-booking-form/app-quest-booking-form';

interface AppQuestBookingDataProps {
  id: number;
  title: string;
}

export default function AppQuestBookingData(props: AppQuestBookingDataProps) {
  const {id, title} = props;
  const isLoaded = useSelector(GetBookingLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchBookingInfoById({id}));
  }, [id]);

  return (
    <div className="container container--size-s">
      <AppQuestBookingTitle title={title}/>
      {isLoaded && <AppQuestBookingMap />}
      {isLoaded && <AppQuestBookingForm />}
    </div>
  );

}
