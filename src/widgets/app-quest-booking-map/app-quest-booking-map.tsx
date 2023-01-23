import {MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {MAP_SCALE, SPB_COORDS} from '../../shared/config/settings-config';
import {AppQuestBookingMarker} from '../app-quest-booking-marker/app-quest-booking-marker';
import {
  GetBookingLastLoadedInfo
} from '../../app/providers/store-provider/slices/booking/selectors/get-booking-last-loaded-info/get-booking-last-loaded-info';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useAppDispatch} from '../../shared/lib/hooks/useAppDispatch';
import {bookingActions} from '../../app/providers/store-provider/slices/booking/slice/booking-slice';


export default function AppQuestBookingMap(): JSX.Element {
  const [activeMarkerID, setActiveMarkerID] = useState(() => -1);
  const [activeMarkerAddress, setActiveMarkerAddress] = useState(() => '');
  const info = useSelector(GetBookingLastLoadedInfo);
  const dispatch = useAppDispatch();

  const handleOnMarkerClick = (id: number, desc: string) => {
    dispatch(bookingActions.setLocationID(id));
    setActiveMarkerID(id);
    setActiveMarkerAddress(desc);
  };

  return (
    <div className="page-content__item">
      <div className="booking-map">
        <div className="map">
          <div className="map__container" >
            <MapContainer
              center={SPB_COORDS}
              zoom={MAP_SCALE}
              scrollWheelZoom={false}
              style={{height : '100%'}}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {info?.locations.map( (l) =>
                <AppQuestBookingMarker key={l.id} id={l.id} address={l.address} onClick={handleOnMarkerClick} position={l.coords} isActive={l.id === activeMarkerID}/>)}
            </MapContainer>
          </div>
        </div>
        <p className="booking-map__address">
          {`Вы выбрали: ${activeMarkerAddress}`}
        </p>
      </div>
    </div>
  );
}

