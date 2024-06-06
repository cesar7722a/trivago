
export function Modal(props) {
  return (
    <div {...props} onClick={CloseModal}
      className="fixed flex top-0 bottom-0 left-0 right-0 bg-[#0a1121bf] h-full w-full z-1 justify-center items-center">
      {props.children}
    </div>
  )
}

const CloseModal = (e) => {
  e.stopPropagation()
  e.target.hidden ? null : (
    e.target.classList.remove("flex")
  )
  e.target.classList.add("hidden")
}