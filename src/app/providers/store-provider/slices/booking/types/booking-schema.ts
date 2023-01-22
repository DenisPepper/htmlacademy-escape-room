import {QuestBookingInfo} from '../../../../../../shared/types/booking-types';

export interface BookingSchema {
  lastLoadedBookingInfo: QuestBookingInfo | null;
  loading: boolean;
}
