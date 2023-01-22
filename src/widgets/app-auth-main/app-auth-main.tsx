import AppLoginForm from '../app-login-form/app-login-form';

export default function AppAuthMain() {
  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source
            type='image/webp'
            srcSet={'img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x'}
          />
          <img
            src={'img/content/maniac/maniac-size-m.jpg'}
            srcSet={'img/content/maniac/maniac-size-m@2x.jpg 2x'}
            width='1366'
            height='768'
            alt=''
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <AppLoginForm/>
        </div>
      </div>
    </main>
  );
}
