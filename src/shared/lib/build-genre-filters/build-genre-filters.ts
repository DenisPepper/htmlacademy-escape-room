import {Genre} from '../../types/quest-types';

interface GenreFilter {
  id: Genre;
  labelName: string;
  iconPath: string;
  iconWidth: string;
  iconHeight: string;
}

export const buildGenreFilters = ():GenreFilter[] => [
  { id: Genre.All,
    labelName: 'Все квесты',
    iconPath: 'icon-all-quests',
    iconWidth: '26',
    iconHeight: '30'
  },
  { id: Genre.Adventures,
    labelName: 'Приключения',
    iconPath: 'icon-adventure',
    iconWidth: '36',
    iconHeight: '30'
  },
  { id: Genre.Horror,
    labelName: 'Ужасы',
    iconPath: 'icon-horror',
    iconWidth: '30',
    iconHeight: '30'
  },
  { id: Genre.Mystic,
    labelName: 'Мистика',
    iconPath: 'icon-mystic',
    iconWidth: '30',
    iconHeight: '30'
  },
  { id: Genre.Detective,
    labelName: 'Детектив',
    iconPath: 'icon-detective',
    iconWidth: '40',
    iconHeight: '30'
  },
  { id: Genre.SciFi,
    labelName: 'Sci-fi',
    iconPath: 'icon-sci-fi',
    iconWidth: '28',
    iconHeight: '30'
  }
];

