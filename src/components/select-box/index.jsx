import { Dropdown } from "react-bootstrap"
import ArrowDown from "../../assets/icons/arrow-down-icon.svg"
import "./select-box.scss"

const SelectBox = ({ bagData, setBagData, bagItem }) => {
  const selectQuantity = (bagItem, quantity) => {
    console.log("Select!", bagItem, quantity)
    let temp = bagData
    console.log("PREV_BAG_DATA: ", temp)
    const bagIndex = bagData.findIndex((el) => el.itemId === bagItem.itemId)
    console.log("BAG_INDEX: ", bagIndex)
    if (quantity !== 0) {
      const newBagItem = {
        ...bagItem,
        quantity
      }
      console.log("NEW_BAG_ITEM: ", newBagItem)
      temp.splice(bagIndex, 1, newBagItem)
    } else {
      temp.splice(bagIndex, 1)
    }
    setBagData([...temp])
    console.log("NEW_BAG_DATA: ", bagData)
  }

  return (
    <Dropdown className="bag-dropdown mr-[16px]">
      <Dropdown.Toggle className="gray-bg flex items-center justify-between gap-3 rounded-full border-0 px-[12px] py-1 duration-300">
        <span className="font-semibold text-black">{bagItem.quantity}</span>
        <img src={ArrowDown} alt="down" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="border-0 shadow">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element, index) => (
          <Dropdown.Item key={index} className="text-black" onClick={() => selectQuantity(bagItem, element)}>
            {element}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectBox
