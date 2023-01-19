const enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

const enum Genre {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

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
