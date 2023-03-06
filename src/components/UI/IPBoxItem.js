const IPBoxItem = ({title, value}) => {
  return(
      <div>
          <h2>{title}</h2>
          <h3>{value}</h3>
          {/*TODO: add vertical line for desktop devices*/}
      </div>
  )
}
export default IPBoxItem;