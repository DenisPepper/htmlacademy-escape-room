export const enum Level {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export const enum Genre {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export type PeopleMinMaxType = [number, number];

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
