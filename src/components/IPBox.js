import IPBoxItem from "./UI/IPBoxItem";
import classes from "../sass/Menu.module.scss";
import {useEffect} from "react";
import useHttp from "../hooks/use-http";

const IPBox = (props) => {
    const {isLoading} = useHttp();
    const {ip,location,isp} = props.ipInformation;
  return (
      <div className={classes['menu__ip-box']}>
          {isLoading ? <p>Tracking ip...</p> : <>
              <IPBoxItem title={'Ip address'} value={ip ? ip : ''}/>
              <IPBoxItem title={'Location'} value={location ? `${location.city} ${location.region}` : ''}/>
              <IPBoxItem title={'timezone'} value={location ? location.timezone : ''}/>
              <IPBoxItem title={'isp'} value={isp ? isp : ''}/>
          </>}

      </div>
  )
}
export default IPBox;