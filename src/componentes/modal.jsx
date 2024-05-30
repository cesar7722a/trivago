
export function Modal(props) {
  return (
    <div {...props}
      className="fixed top-0 bottom-0 left-0 right-0 bg-[#0a1121bf] h-full w-full z-1 flex justify-center items-center">
      {props.children}
    </div>
  )
}