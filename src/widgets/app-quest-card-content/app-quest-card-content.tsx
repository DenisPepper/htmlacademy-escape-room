import {Level, PeopleMinMaxType} from '../../shared/types/quest-types';
import {Link} from 'react-router-dom';
import {levelFilters as filters} from '../../shared/lib/level-filters/level-filters';
import {AppRoutes} from '../../shared/config/routes-config';
import AppQuestCardTags from '../app-quest-card-tags/app-quest-card-tags';


interface AppQuestCardContentProps {
  title: string;
  level: Level;
  peopleMinMax: PeopleMinMaxType;
  id: number;
}

export default function AppQuestCardContent(props: AppQuestCardContentProps): JSX.Element {
  const {title, level, peopleMinMax, id} = props;
  const [min , max] = peopleMinMax;
  const name = filters.find((filter) => filter.id === level)?.name || '';

  return (
    <div className="quest-card__content">
      <div className="quest-card__info-wrapper">
        <Link className={'quest-card__link'} to={`${AppRoutes.Quest.replace(/:id/g, '' )}${id}`}>{title}</Link>
      </div>
      <AppQuestCardTags name={name} min={min} max={max}/>
    </div>
  );
}
