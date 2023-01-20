import {Genre, Level, PeopleMinMaxType} from '../../shared/types/quest-types';
import {genreFilters} from '../../shared/lib/genre-filters/genre-filters';
import AppQuestContentGenre from '../app-quest-content-genre/app-quest-content-genre';
import {levelFilters} from '../../shared/lib/level-filters/level-filters';
import AppQuestCardTags from '../app-quest-card-tags/app-quest-card-tags';
import {Link} from 'react-router-dom';

interface AppQuestContentDataProps {
  title: string;
  type: Genre;
  level: Level;
  description: string;
  peopleMinMax: PeopleMinMaxType;
}

export default function AppQuestContentData(props: AppQuestContentDataProps): JSX.Element {
  const {title, type, level, description, peopleMinMax} = props;
  const typeName = genreFilters.find((filter) => filter.id === type)?.labelName || '';
  const levelName = levelFilters.find((filter) => filter.id === level)?.name || '';
  const [min , max] = peopleMinMax;

  return (
    <div className={'container container--size-l'}>
      <div className='quest-page__content'>
        <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
        <p className="subtitle quest-page__subtitle">
          <AppQuestContentGenre typeName={typeName}/>
        </p>
        <AppQuestCardTags name={levelName} min={min} max={max}/>
        <p className="quest-page__description">
          {description}
        </p>
        <Link to={'/'} className='btn btn--accent btn--cta quest-page__btn'>Забронировать</Link>
      </div>
    </div>
  );
}

/*

<a className="btn btn--accent btn--cta quest-page__btn" href="booking.html">Забронировать</a>;
*/
