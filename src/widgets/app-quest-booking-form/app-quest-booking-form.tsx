import {useSelector} from 'react-redux';
import {
  GetBookingLastLoadedInfo
} from '../../app/providers/store-provider/slices/booking/selectors/get-booking-last-loaded-info/get-booking-last-loaded-info';
import AppQuestBookingTime from '../app-quest-booking-time/app-quest-booking-time';
import {BookingDate as Date} from '../../shared/types/booking-types';
import React, {useState} from 'react';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {bookingActions} from '../../app/providers/store-provider/slices/booking/slice/booking-slice';
import {debounce} from '../../shared/lib/debounce/debounce';
import {DECIMAL_RADIX} from '../../shared/config/settings-config';

export default function AppQuestBookingForm(): JSX.Element {
  const info = useSelector(GetBookingLastLoadedInfo);
  const dispatch = useAppDispatch();
  const [checkedDate, setCheckedDate] = useState(Date.Today);
  const [checkedTime, setCheckedTime] = useState('');
  const [checkedWithChildren, setCheckedWithChildren] = useState(false);

  const handleOnChangeDateTime = (date: Date, time: string) => {
    dispatch(bookingActions.setDate(date));
    dispatch(bookingActions.setTime(time));
    setCheckedDate(date);
    setCheckedTime(time);
  };

  const handleOnContactPersonInput = debounce((evt) => {
    dispatch(bookingActions.setContactPerson(evt.target.value));
  });

  const handleOnPhoneInput = debounce((evt) => {
    dispatch(bookingActions.setPhone(evt.target.value));
  });

  const handleOnPeopleCountInput = debounce((evt) => {
    dispatch(bookingActions.setPeopleCount(parseInt(evt.target.value, DECIMAL_RADIX) || 0));
  });

  const handleOnChangeWithChildren = () => {
    dispatch(bookingActions.setWithChildren(!checkedWithChildren));
    setCheckedWithChildren(!checkedWithChildren);
  };

  return (
    <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            {info?.slots.today.map( (date) =>
              <AppQuestBookingTime key={date.time} checked={checkedDate === Date.Today && checkedTime === date.time} date={Date.Today} time={date.time} disabled={date.isAvailable} callback={handleOnChangeDateTime} />
            )}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            {info?.slots.tomorrow.map( (date) =>
              <AppQuestBookingTime key={date.time} checked={checkedDate === Date.Tomorrow && checkedTime === date.time} date={Date.Tomorrow} time={date.time} disabled={date.isAvailable} callback={handleOnChangeDateTime} />
            )}
          </div>
        </fieldset>
      </fieldset>

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" onInput={handleOnContactPersonInput} id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"/>
        </div>

        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input onInput={handleOnPhoneInput} type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}"/>
        </div>

        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" onInput={handleOnPeopleCountInput} id="person" name="person" placeholder="Количество участников" required />
        </div>

        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" onChange={handleOnChangeWithChildren} id="children" name="children" checked={checkedWithChildren}/>
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>

    </form>
  );
}

