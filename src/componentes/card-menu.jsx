
export function ModalMenu(props) {

  return (
    <div {...props} className="flex-none absolute w-72 h-60 mt-80 bg-[#FFF] rounded-md shadow-2xl 
    hidden group-hover:block">
      {props.children}
    </div>
  )
}