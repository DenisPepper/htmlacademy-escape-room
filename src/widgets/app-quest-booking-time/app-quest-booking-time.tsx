import {InputHTMLAttributes} from 'react';
import {BookingDate} from '../../shared/types/booking-types';


interface AppQuestBookingTimeProps extends InputHTMLAttributes<HTMLInputElement>{
  date: BookingDate;
  time: string;
  callback: (date: BookingDate, time: string) => void;
}

export default function AppQuestBookingTime(props: AppQuestBookingTimeProps): JSX.Element {

  const {date, time, callback, ...restProps} = props;

  const handleOnChange = () => callback(date,time);

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        required
        id={`${date}${time}`}
        value={`${date}${time}`}
        name="date"
        {...restProps}
        onChange={handleOnChange}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );

}


//<input type="radio" id="today15h00m" name="date" checked required value="today15h00m"/>
