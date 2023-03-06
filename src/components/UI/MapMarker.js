import {Marker, useMap} from "react-leaflet";
import {iconMarker} from "./MarkerIcon";
import {useEffect, useState} from "react";
import L from 'leaflet'
const MapMarker = ({lat, lng}) => {
  const [position, setPosition] = useState(null);
  const map = useMap();
  useEffect(() => {
    setPosition(L.latLng(lat ? lat : 50,lng ? lng : 50))
    map.flyTo(L.latLng( lat ? lat : 50,lng ? lng : 50), map.getZoom());
  }, [lat,lng]);
  return <Marker position={position ? position : [51, -0.9]} icon={iconMarker}></Marker>
}
export default MapMarker;