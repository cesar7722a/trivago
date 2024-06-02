

export function TitleModal(props) {
  return (
    <div {...props} className="flex justify-between px-6 mt-4">
      {props.children}
    </div>
  )
}