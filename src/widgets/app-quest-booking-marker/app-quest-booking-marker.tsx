import {Marker} from 'react-leaflet';
import L, {LatLngExpression} from 'leaflet';

interface AppQuestBookingMarkerProps {
  id: number;
  address: string;
  position: LatLngExpression;
  isActive: boolean;
  onClick: (id: number, desc: string) => void;
}


export function AppQuestBookingMarker(props: AppQuestBookingMarkerProps): JSX.Element {

  const {id, address, position, isActive, onClick} = props;

  const icon = L.icon({ iconUrl: `${isActive ? '/img/svg/pin-active.svg' : '/img/svg/pin-default.svg'}` });

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        click: (e) => {
          onClick(id, address);
        },
      }}
    >
    </Marker>
  );
}

