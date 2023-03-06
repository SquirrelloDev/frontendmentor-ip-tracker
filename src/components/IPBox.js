import IPBoxItem from "./UI/IPBoxItem";
import classes from "../sass/Menu.module.scss";

const IPBox = () => {
  return (
      <div className={classes['menu__ip-box']}>
        <IPBoxItem title={'Ip address'} value={'192.168.174.101'}/>
        <IPBoxItem title={'Location'} value={'London'}/>
        <IPBoxItem title={'timezone'} value={'UTC -5:00'}/>
        <IPBoxItem title={'isp'} value={'SpaceX Starink'}/>
      </div>
  )
}
export default IPBox;