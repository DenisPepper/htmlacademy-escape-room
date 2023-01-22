export default function AppQuestBookingMap(): JSX.Element {
  return (
    <div className="page-content__item">
      <div className="booking-map">
        <div className="map">
          <div className="map__container"></div>
        </div>
        <p className="booking-map__address">
          {'Вы выбрали: '}
        </p>
      </div>
    </div>
  );
}
