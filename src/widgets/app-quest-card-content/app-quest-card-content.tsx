import {Level, PeopleMinMaxType} from '../../shared/types/quest-types';
import {Link} from 'react-router-dom';
import {levelFilters as filters} from '../../shared/lib/level-filters/level-filters';

interface AppQuestCardContentProps {
  title: string;
  level: Level;
  peopleMinMax: PeopleMinMaxType;
}

export default function AppQuestCardContent(props: AppQuestCardContentProps): JSX.Element {
  const {title, level, peopleMinMax} = props;
  const [min , max] = peopleMinMax;
  const name = filters.find((filter) => filter.id === level)?.name;

  return (
    <div className="quest-card__content">
      <div className="quest-card__info-wrapper">
        <Link className={'quest-card__link'} to={'/contact'}>{title}</Link>
      </div>
      <ul className="tags quest-card__tags">
        <li className="tags__item">
          <svg width="11" height="14" aria-hidden="true">
            <use xlinkHref="#icon-person"></use>
          </svg>
          {`${min}-${max}`}&nbsp;чел
        </li>
        <li className="tags__item">
          <svg width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-level"></use>
          </svg>
          {name}
        </li>
      </ul>
    </div>
  );
}
