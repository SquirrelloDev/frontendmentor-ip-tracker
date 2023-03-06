import Menu from "./components/Menu";
import MapWrapper from "./components/MapWrapper";
import {useCallback, useEffect, useState} from "react";
import useHttp from "./hooks/use-http";
import useGeolocation from "./hooks/use-geolocation";

function App() {
    const [ipInfo, setIpInfo] = useState({});
    const [location, setLocation] = useState([]);
    const {getUserIP,getIP} = useHttp()
    const {geoAvailable,userPosition,getUserLocation} = useGeolocation();
    const setIp = useCallback( (info) => {
      setIpInfo(info);
      setLocation(info.location);
    }, []);

    useEffect(() =>{
        const getUserIpAddr = async () => {
            const userIp = await getUserIP();
            const data = await getIP({ipAddr: userIp.ip, domain: ''})
            setIpInfo(data);
        }
        getUserIpAddr();

    },[getIP, getUserIP])
  return (
    <>
        <Menu ip={ipInfo} getIpInfo={setIp}/>
        <MapWrapper location={location}/>
    </>
  );
}

export default App;
