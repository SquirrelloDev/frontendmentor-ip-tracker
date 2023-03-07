import arrow from '../../img/icon-arrow.svg'
import classes from "../../sass/Menu.module.scss";
import {useRef} from "react";
import useHttp from "../../hooks/use-http";
const Input = (props) => {
    const regexIp = new RegExp('^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$')
    const inputRef = useRef();
    const {isLoading, getIP} = useHttp();
    const sendRequest = async (e) => {
        e.preventDefault();
        const info = await getIP({ipAddr: inputRef.current.value.match(regexIp) ? inputRef.current.value : '', domain: !inputRef.current.value.match(regexIp) ? inputRef.current.value : ''});
        props.getIpInfo(info, isLoading);
    }
  return (
      <div className={classes['menu__input-box']}>
          <input ref={inputRef} type={"text"} className={classes['menu__input-box__input']}/>
          <button type={'submit'} onClick={sendRequest} className={classes['menu__input-box__button']}><img src={arrow} alt={"Proceed action"} /></button>
      </div>

  )
}
export default Input;