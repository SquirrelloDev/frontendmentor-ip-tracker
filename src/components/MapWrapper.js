import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import classes from "../sass/Map.module.scss";

const MapWrapper = () => {
  return(
      <section className={classes.map}>
      {/*TODO: add a leaflet map*/}
          <MapContainer className={classes.map__container} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                  <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
          </MapContainer>
      </section>
  )
}
export default MapWrapper;