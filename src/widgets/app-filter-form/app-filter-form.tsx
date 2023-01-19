import AppFilterOfGenre from '../app-filter-of-genre/app-filter-of-genre';
import AppFilterOfLevel from '../app-filter-of-level/app-filter-of-level';

export default function AppFilterForm():JSX.Element {
  return (
    <div className="page-content__item">
      <form className="filter" action="#" method="get">
        <AppFilterOfGenre/>
        <AppFilterOfLevel/>
      </form>
    </div>);
}
