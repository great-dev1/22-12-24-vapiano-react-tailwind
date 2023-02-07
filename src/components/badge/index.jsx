import "./badge.scss"

const Badge = ({ variant }) => {
  return (
    <span className="inline-block">
      <span className="icon green relative mx-1 flex flex-shrink-0 items-center justify-center rounded-full font-semibold uppercase">{variant}</span>
    </span>
  )
}

export default Badge
