import {Level} from '../../types/quest-types';

interface LevelFilter {
  id: Level;
  name: string;
}

export const levelFilters:LevelFilter[] = [
  { id: Level.Any,
    name: 'Любой',
  },
  { id: Level.Easy,
    name: 'Лёгкий',
  },
  { id: Level.Medium,
    name: 'Средний',
  },
  { id: Level.Hard,
    name: 'Сложный',
  },
];
