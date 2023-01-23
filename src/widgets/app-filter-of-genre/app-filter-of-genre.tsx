import AppFilterFieldset from '../app-filter-fieldset/app-filter-fieldset';
import AppRadioInputOfGenre from '../app-radio-input-of-genre/app-radio-input-of-genre';
import {genreFilters as filters} from '../../shared/lib/genre-filters/genre-filters';

export default function AppFilterOfGenre(): JSX.Element {

  return (
    <AppFilterFieldset legendName='Тематика'>
      <ul className='filter__list'>
        {
          filters.map((item) =>
            (
              <li className='filter__item' key={item.id}>
                <AppRadioInputOfGenre
                  id={item.id}
                  labelName={item.labelName}
                  iconPath={item.iconPath}
                  iconWidth={item.iconWidth}
                  iconHeight={item.iconHeight}
                />
              </li>
            )
          )
        }
      </ul>
    </AppFilterFieldset>
  );
}

