

export function CardModal(props) {
  return (
    <div {...props} onClick={CloseModal} className="bg-white w-[24rem] rounded-lg flex flex-col gap-6">
      {props.children}
    </div>
  )
}

const CloseModal = (e) => {
  e.stopPropagation()
}