

export function SelectCountry(props) {
  return (
    <select {...props} name="" id="">
      {
        props.option.map(element => <option key={element.id}>{element}</option>)
      }
    </select>
  )
}