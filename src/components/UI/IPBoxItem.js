import classes from "../../sass/Menu.module.scss";

const IPBoxItem = ({title, value}) => {
  return(
      <div className={classes['menu__ip-box__item']}>
          <h2>{title}</h2>
          <h3>{title ==='timezone' ? 'UTC' : null} {value}</h3>
      </div>
  )
}
export default IPBoxItem;