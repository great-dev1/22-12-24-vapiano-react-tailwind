import PlusIcon from "../../assets/icons/plus-icon.svg"
import MinusIcon from "../../assets/icons/minus-icon.svg"
import MinusIconDark from "../../assets/icons/minus-icon-dark.svg"
import "./circle-button.scss"

const CircleButton = ({ variant, quantity, setQuantity }) => {
  const changeQuantity = () => {
    if (variant === "increase") {
      setQuantity(quantity + 1)
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1)
      }
    }
  }

  return (
    <button
      className={`circle-btn flex h-10 w-10 items-center justify-center rounded-full ${variant === "decrease" && quantity === 0 && "dark"}`}
      onClick={changeQuantity}
    >
      <img src={variant === "increase" ? PlusIcon : quantity === 0 ? MinusIconDark : MinusIcon} width={24} alt="plus" />
    </button>
  )
}

export default CircleButton
