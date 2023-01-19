import {Level} from '../../types/quest-types';

interface LevelFilter {
  id: Level;
  labelName: string;
}

export const buildLevelFilters = ():LevelFilter[] => [
  { id: Level.Any,
    labelName: 'Любой',
  },
  { id: Level.Easy,
    labelName: 'Лёгкий',
  },
  { id: Level.Medium,
    labelName: 'Средний',
  },
  { id: Level.Hard,
    labelName: 'Сложный',
  },
];
