import {Marker} from 'react-leaflet';
import L, {LatLngExpression} from 'leaflet';

interface AppQuestBookingMarkerProps {
  position: LatLngExpression;
}

export function AppQuestBookingMarker(props: AppQuestBookingMarkerProps): JSX.Element {

  const {position} = props;

  const icon = L.icon({ iconUrl: '/img/svg/pin-default.svg' });

  return (
    <Marker
      position={position}
      icon={icon}
    >
    </Marker>
  );
}
