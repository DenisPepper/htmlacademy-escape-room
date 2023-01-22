import {QuestDate, QuestLocation} from './quest-types';

export interface QuestBookingInfo{
  id: number;
  locations: QuestLocation[];
  slots: {
    today: QuestDate[];
    tomorrow: QuestDate[];
  };
}

