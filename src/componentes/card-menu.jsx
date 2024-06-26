
export function ModalMenu(props) {

  return (
    <div {...props} className="flex absolute justify-center items-center bg-white mt-32
                                rounded-md shadow-2xl">
      {props.children}
    </div>
  )
}
// hidden group-hover:block