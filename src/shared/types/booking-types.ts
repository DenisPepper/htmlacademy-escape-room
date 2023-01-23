import {QuestDate, QuestLocation} from './quest-types';

export interface QuestBookingInfo{
  id: number;
  locations: QuestLocation[];
  slots: {
    today: QuestDate[];
    tomorrow: QuestDate[];
  };
}

export const enum BookingDate{
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export interface BookingRecord{
  date: BookingDate;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  locationId: number;
  questId: number;
}

