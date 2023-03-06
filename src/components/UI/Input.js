import arrow from '../../img/icon-arrow.svg'
const Input = () => {
  return (
      <div>
          <input type={"text"}/>
          <button type={'submit'}><img src={arrow} alt={"Proceed action"}/></button>
      </div>

  )
}
export default Input;