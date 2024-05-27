

export function LiMenu(props) {
  return (
    <li {...props} className="flex items-center gap-1.5 text-sm text-[#0A1121] py-5 px-5 hover:bg-[#F3F4F5] cursor-pointer">
      {props.children}
    </li>
  )
}