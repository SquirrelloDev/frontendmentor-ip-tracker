import arrow from '../../img/icon-arrow.svg'
import classes from "../../sass/Menu.module.scss";
const Input = () => {
  return (
      <div className={classes['menu__input-box']}>
          <input type={"text"} className={classes['menu__input-box__input']}/>
          <button type={'submit'} className={classes['menu__input-box__button']}><img src={arrow} alt={"Proceed action"} /></button>
      </div>

  )
}
export default Input;