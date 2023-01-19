import AppLink from '../../shared/ui/app-link/app-link';
import './not-found-page.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className={'container not-found-page'}>
      <h1 className={'title title--size-m page-content__title'}>404 Not Found</h1>
      <AppLink to={'/'}>Вернуться на главную</AppLink>
    </div>
  );
}
