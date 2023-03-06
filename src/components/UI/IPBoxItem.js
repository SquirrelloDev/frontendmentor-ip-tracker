import classes from "../../sass/Menu.module.scss";

const IPBoxItem = ({title, value}) => {
  return(
      <div className={classes['menu__ip-box__item']}>
          <h2>{title}</h2>
          <h3>{value}</h3>
          {/*TODO: add vertical line for desktop devices*/}
      </div>
  )
}
export default IPBoxItem;