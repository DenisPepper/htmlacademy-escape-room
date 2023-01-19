interface AppPageTitleProps {
  mainTitle: string;
  subTitle: string;
}

export default function AppPageTitle(props: AppPageTitleProps): JSX.Element {
  const {mainTitle = '', subTitle = ''} = props;

  return (
    <div className={'page-content__title-wrapper'}>
      <h1 className="subtitle page-content__subtitle">{subTitle}</h1>
      <h2 className="title title--size-m page-content__title">{mainTitle}</h2>
    </div>
  );
}
