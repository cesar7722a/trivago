
export function CardModal(props) {
  return (
    <div {...props} className="bg-white h-64 w-[24rem] rounded-lg flex flex-col gap-4">
      {props.children}
    </div>
  )
}