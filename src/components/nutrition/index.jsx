import CaffineIcon from "../../assets/icons/caffine-icon.svg"
import DairyIcon from "../../assets/icons/dairy-icon.svg"
import LactoseIcon from "../../assets/icons/lactose-icon.svg"
import VeganIcon from "../../assets/icons/vegan-icon.svg"

const Nutrition = ({ variant = "caffine" }) => {
  let image, title
  switch (variant) {
    case "dairy":
      image = DairyIcon
      title = "Dairy Free"
      break
    case "lactose":
      image = LactoseIcon
      title = "Lactose Free"
      break
    case "vegan":
      image = VeganIcon
      title = "Vegan Friendly"
      break
    default:
      image = CaffineIcon
      title = "Caffine Free"
      break
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt={variant} />
      <p className={`${variant} mt-1 font-medium capitalize`}>{title}</p>
    </div>
  )
}

export default Nutrition
