import {Genre, Level} from '../../../../../../shared/types/quest-types';

type PeopleMinMaxType = [number, number];

export interface QuestInfo {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Genre;
  peopleMinMax: PeopleMinMaxType;
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export interface QuestReducedInfo {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Genre;
  peopleMinMax: PeopleMinMaxType;
}

export interface QuestsSchema {
  list: QuestReducedInfo[];
}
