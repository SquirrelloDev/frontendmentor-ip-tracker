import Input from "./UI/Input";
import IPBox from "./IPBox";
import classes from "../sass/Menu.module.scss";

const Menu = (props) => {
    const getIpInfo = (info) => {
      props.getIpInfo(info);
    }
  return (
      <section className={classes.menu}>
          <h1>IP Address Tracker</h1>
          <Input getIpInfo={getIpInfo}/>
          <IPBox ipInformation={props.ip}/>
      </section>
  )
}
export default Menu;