

export function SelectCountry(props) {
  return (
    <select {...props} name="" id="">
      {
        props.optionCountry.map((element, index) =>
          <option
            className="hover:bg-blue-700"
            key={index}>
            {element}
          </option>
        )
      }
    </select>
  )
}