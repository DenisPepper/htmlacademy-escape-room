import AppFilterFieldset from '../app-filter-fieldset/app-filter-fieldset';
import {levelFilters as filters} from '../../shared/lib/level-filters/level-filters';
import AppRadioInputOfLevel from '../app-radio-input-of-level/app-radio-input-of-level';

export default function AppFilterOfLevel(): JSX.Element {

  return (
    <AppFilterFieldset legendName='Сложность'>
      <ul className="filter__list">
        {filters.map( (item) =>
          (
            <li className='filter__item' key={item.id}>
              <AppRadioInputOfLevel id={item.id} labelName={item.name}/>
            </li>
          )
        )}
      </ul>
    </AppFilterFieldset>
  );
}

