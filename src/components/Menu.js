import Input from "./UI/Input";
import IPBox from "./IPBox";
import classes from "../sass/Menu.module.scss";

const Menu = () => {
  return (
      <section className={classes.menu}>
          <h1>IP Address Tracker</h1>
          <Input/>
          <IPBox/>
      </section>
  )
}
export default Menu;