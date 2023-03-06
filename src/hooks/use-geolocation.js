import {useState} from "react";

const useGeolocation = () => {
    const [geoAvailable, setGeoAvailable] = useState(true);
    const [userPosition, setUserPosition] = useState(null);
    const successfulCallback = (position) => {
        setUserPosition(position);
    }
    const failureCallback = () =>{
        console.error('Grant geolocation permissions')
    }
  const getUserLocation = () => {
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(successfulCallback, failureCallback)
    }
    else{
        setGeoAvailable(false);
    }
  }
  return{
      geoAvailable,
      userPosition,
      getUserLocation
  }
}
export default useGeolocation;