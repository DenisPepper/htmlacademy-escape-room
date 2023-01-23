import {useSelector} from 'react-redux';
import {
  GetBookingLastLoadedInfo
} from '../../app/providers/store-provider/slices/booking/selectors/get-booking-last-loaded-info/get-booking-last-loaded-info';
import AppQuestBookingTime from '../app-quest-booking-time/app-quest-booking-time';
import {BookingDate as Date} from '../../shared/types/booking-types';
import {useState} from 'react';

export default function AppQuestBookingForm(): JSX.Element {
  const info = useSelector(GetBookingLastLoadedInfo);
  const [checkedDate, setCheckedDate] = useState(Date.Today);
  const [checkedTime, setCheckedTime] = useState('');

  // eslint-disable-next-line no-console
  console.log(checkedDate, checkedTime);

  const handleOnChange = (date: Date, time: string) => {
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

          </div>
        </fieldset>
      </fieldset>


    </form>
  );
}

