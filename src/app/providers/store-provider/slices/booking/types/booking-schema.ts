import {BookingDate, QuestBookingInfo} from '../../../../../../shared/types/booking-types';

export interface BookingSchema {
  lastLoadedBookingInfo: QuestBookingInfo | null;
  isLoaded: boolean | null;
  date: BookingDate | null;
  time: string | null;
  contactPerson: string | null;
  phone: string | null;
  withChildren: boolean | null;
  peopleCount: number | null;
  locationId: number | null;
  questId: number | null;
  agree: boolean | null;
}
