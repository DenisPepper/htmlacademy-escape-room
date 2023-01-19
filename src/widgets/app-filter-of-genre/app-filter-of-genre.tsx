import AppFieldset from '../app-fieldset/app-fieldset';
import AppRadioInputOfGenre from '../app-radio-input-of-genre/app-radio-input-of-genre';
import {buildGenreFilters} from '../../shared/lib/build-genre-filters/build-genre-filters';

const filters = buildGenreFilters();

export default function AppFilterOfGenre(): JSX.Element {

  return (
    <AppFieldset legendName='Тематика'>
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
    </AppFieldset>
  );
}

