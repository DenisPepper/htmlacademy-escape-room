import AppFieldset from '../app-fieldset/app-fieldset';
import {buildLevelFilters} from '../../shared/lib/build-level-filters/build-level-filters';
import AppRadioInputOfLevel from '../app-radio-input-of-level/app-radio-input-of-level';

const filters = buildLevelFilters();

export default function AppFilterOfLevel(): JSX.Element {

  return (
    <AppFieldset legendName='Сложность'>
      <ul className="filter__list">
        {filters.map( (item) =>
          (
            <li className='filter__item' key={item.id}>
              <AppRadioInputOfLevel id={item.id} labelName={item.labelName}/>
            </li>
          )
        )}
      </ul>
    </AppFieldset>

  );
}


/*
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <li className="filter__item">
          <input type="radio" name="level" id="any" checked>
            <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
            </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="level" id="easy">
            <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
            </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="level" id="middle">
            <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
            </label>
        </li>
        <li className="filter__item">
          <input type="radio" name="level" id="hard">
            <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
            </label>
        </li>
      </ul>
    </fieldset>
   */
