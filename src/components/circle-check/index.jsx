import "./circle-check.scss"

const CircleCheck = ({ variant, name, checked, children }) => {
  return (
    <label className="circle-check relative block cursor-pointer select-none py-[16px] pl-9">
      <input className="hidden" type={variant} name={name} checked={checked} />
      <span className="checkmark absolute left-0 h-6 w-6 rounded-full duration-300" />
      <div className="flex items-center justify-between">{children}</div>
    </label>
  )
}

export default CircleCheck
