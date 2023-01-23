import {useSelector} from 'react-redux';
import {
  GetBookingLastLoadedInfo
} from '../../app/providers/store-provider/slices/booking/selectors/get-booking-last-loaded-info/get-booking-last-loaded-info';
import AppQuestBookingTime from '../app-quest-booking-time/app-quest-booking-time';
import {BookingDate as Date} from '../../shared/types/booking-types';
import {useState} from 'react';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {bookingActions} from '../../app/providers/store-provider/slices/booking/slice/booking-slice';

export default function AppQuestBookingForm(): JSX.Element {
  const info = useSelector(GetBookingLastLoadedInfo);
  const dispatch = useAppDispatch();
  const [checkedDate, setCheckedDate] = useState(Date.Today);
  const [checkedTime, setCheckedTime] = useState('');


  const handleOnChange = (date: Date, time: string) => {
    dispatch(bookingActions.setDate(date));
    dispatch(bookingActions.setTime(time));
    setCheckedDate(date);
    setCheckedTime(time);
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {info?.slots.today.map( (date) =>
              <AppQuestBookingTime key={date.time} checked={checkedDate === Date.Today && checkedTime === date.time} date={Date.Today} time={date.time} disabled={date.isAvailable} callback={handleOnChange} />
            )}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {info?.slots.tomorrow.map( (date) =>
              <AppQuestBookingTime key={date.time} checked={checkedDate === Date.Tomorrow && checkedTime === date.time} date={Date.Tomorrow} time={date.time} disabled={date.isAvailable} callback={handleOnChange} />
            )}
          </div>
        </fieldset>
      </fieldset>


    </form>
  );
}

