import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import classes from "../sass/Map.module.scss";
import {iconMarker} from "./UI/MarkerIcon";
import {useEffect} from "react";
import MapMarker from "./UI/MapMarker";

const MapWrapper = ({location}) => {
    const {lat,lng} = location;
  return(
      <section className={classes.map}>
          <MapContainer className={classes.map__container} center={[50, 50]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapMarker lat={lat} lng={lng}/>
          </MapContainer>
      </section>
  )
}
export default MapWrapper;