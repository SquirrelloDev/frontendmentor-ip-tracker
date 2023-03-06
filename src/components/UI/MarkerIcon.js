import L from 'leaflet';
import iconimg from '../../img/icon-location.svg'
const iconMarker = new L.Icon({
    iconUrl: iconimg,
    iconSize:     [46, 56], // size of the icon
    iconAnchor:   [22, 56], // point of the icon which will correspond to marker's location
});

export { iconMarker };