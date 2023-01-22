interface AppQuestBookingTitleProps {
  title: string;
}

export default function AppQuestBookingTitle(props: AppQuestBookingTitleProps): JSX.Element {
  const {title} = props;

  return (
    <div className="page-content__title-wrapper">
      <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
      </h1>
      <p className="title title--size-m title--uppercase page-content__title">{title}</p>
    </div>
  );
}
