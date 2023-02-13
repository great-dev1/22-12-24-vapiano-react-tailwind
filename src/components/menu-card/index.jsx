import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import Nutrition from "../nutrition"
import CloseIcon from "../../assets/icons/close-icon.svg"
import CirclePlusIcon from "../../assets/icons/circle-plus-icon.svg"
import CircleMinusIcon from "../../assets/icons/circle-minus-icon.svg"
import "./menu-card.scss"

const MenuBox = ({ itemData, bagData, setBagData }) => {
  const [showModal, setShowModal] = useState(false)
  const [hideTitle, setHideTitle] = useState(true)

  const handleScroll = (e) => {
    if (e.target.scrollTop > 56) {
      setHideTitle(false)
    } else {
      setHideTitle(true)
    }
  }

  // Quantity increase/decrease
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1)
    }
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Total price change with unit price/quantity
  const [unitPrice, setUnitPrice] = useState(itemData.price)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(unitPrice * quantity)
  }, [unitPrice, quantity])

  // Unit price change with required/optional check
  const [required, setRequired] = useState({ name: "Normal" })
  const [optional, setOptional] = useState([])
  const [disabled, setDisabled] = useState(false)

  const changeRequired = (element) => {
    let temp = unitPrice
    if (required.price) {
      temp -= required.price
    }
    if (element.price) {
      temp += element.price
    }
    setUnitPrice(temp)
    setRequired(element)
  }

  const changeOptional = (e, element) => {
    let tempPrice = unitPrice
    let tempOptional = optional

    if (e.target.checked) {
      if (element.price) tempPrice += element.price
      tempOptional.push(element)
    } else {
      if (element.price) tempPrice -= element.price
      const index = optional.findIndex((el) => el.name === element.name)
      tempOptional.splice(index, 1)
    }

    setUnitPrice(tempPrice)
    setOptional([...tempOptional])
  }

  // Optional disabled with checked count
  useEffect(() => {
    if (optional.length >= itemData.optional.limit) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [optional])

  // Add to bag
  const addToBag = () => {
    setBagQuantity(quantity)
    console.log("PREV_BAG_DATA: ", bagData)
    let temp = bagData
    const newBagItem = {
      itemId: itemData.id,
      name: itemData.name,
      thumb: itemData.thumb,
      quantity,
      unitPrice,
      required,
      optional
    }
    console.log("NEW_BAG_ITEM: ", newBagItem)
    const bagIndex = bagData.findIndex((el) => el.itemId === itemData.id)
    if (bagIndex >= 0) {
      console.log("EXISTING_BAG_ITEM")
      temp.splice(bagIndex, 1, newBagItem)
    } else {
      console.log("NEW_BAG_ITEM")
      temp.push(newBagItem)
    }
    setBagData([...temp])
    console.log("NEW_BAG_DATA: ", bagData)
    setShowModal(false)
  }

  // Increase/decrease quantity of a bag item
  const increaseBagQuantity = (e) => {
    e.stopPropagation()
    setBagQuantity(bagQuantity + 1)
    let temp = bagData
    console.log("PREV_BAG_DATA: ", temp)
    const bagIndex = bagData.findIndex((el) => el.itemId === itemData.id)
    const newBagItem = {
      ...bagData[bagIndex],
      quantity: bagQuantity + 1
    }
    console.log("NEW_BAG_ITEM: ", newBagItem)
    temp.splice(bagIndex, 1, newBagItem)
    setBagData([...temp])
    console.log("NEW_BAG_DATA: ", bagData)
  }

  const decreaseBagQuantity = (e) => {
    e.stopPropagation()
    setBagQuantity(bagQuantity - 1)
    let temp = bagData
    console.log("PREV_BAG_DATA: ", temp)
    const bagIndex = bagData.findIndex((el) => el.itemId === itemData.id)
    if (bagQuantity > 1) {
      const newBagItem = {
        ...bagData[bagIndex],
        quantity: bagQuantity - 1
      }
      console.log("NEW_BAG_ITEM: ", newBagItem)
      temp.splice(bagIndex, 1, newBagItem)
    } else {
      temp.splice(bagIndex, 1)
    }
    setBagData([...temp])
    console.log("NEW_BAG_DATA: ", bagData)
  }

  // Initilize with bag data
  const [bagQuantity, setBagQuantity] = useState(0) // quantity of a bag item

  const init = () => {
    const bagIndex = bagData.findIndex((el) => el.itemId === itemData.id)
    if (bagIndex >= 0) {
      setBagQuantity(bagData[bagIndex].quantity)
      setQuantity(bagData[bagIndex].quantity)
      setUnitPrice(bagData[bagIndex].unitPrice)
      setRequired(bagData[bagIndex].required)
      setOptional([...bagData[bagIndex].optional])
    } else {
      setBagQuantity(0)
      setQuantity(1)
      setUnitPrice(itemData.price)
      setRequired({ name: "Normal" })
      setOptional([])
    }
  }

  useEffect(() => {
    console.log("INITIALIZING...")
    init()
  }, [bagData])

  useEffect(() => {
    console.log("NEW_BAG_QUANTITY: ", bagQuantity)
  }, [bagQuantity])

  useEffect(() => {
    console.log("NEW_QUANTITY: ", quantity)
  }, [quantity])

  useEffect(() => {
    console.log("NEW_REQUIRED: ", required)
  }, [required])

  useEffect(() => {
    console.log("NEW_OPTIONAL: ", optional)
  }, [optional])

  return (
    <>
      <div
        className="menu-card cursor-pointer rounded-3xl bg-white px-[20px] py-[16px] text-left duration-300 hover:shadow"
        onClick={() => setShowModal(true)}
      >
        <div className="mb-[16px] flex justify-between gap-2">
          <div>
            <h3 className="secondary-title mb-1 font-semibold uppercase">{itemData.name}</h3>
            <p className="blue font-medium">Buy One Get One Free</p>
          </div>

          {itemData.thumb && itemData.thumb !== "" && (
            <img className="h-20 w-full max-w-[80px] flex-shrink-0 rounded-lg object-cover" src={itemData.thumb} alt={itemData.name} />
          )}
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center">
            <p className="font-semibold uppercase">
              <span className="primary font-semibold">Sold out</span>
              <span className="secondary mx-1">•</span>
            </p>
            <p className="font-semibold">${itemData.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-2">
            {bagQuantity > 0 && (
              <>
                <button onClick={(e) => decreaseBagQuantity(e)}>
                  <img src={CircleMinusIcon} alt="minus" />
                </button>
                <span className="gray text-xl font-semibold">{bagQuantity}</span>
              </>
            )}
            <button onClick={bagQuantity > 0 ? (e) => increaseBagQuantity(e) : () => setShowModal(true)}>
              <img src={CirclePlusIcon} alt="plus" />
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} backdrop="static" fullscreen="md-down" dialogClassName={`menu-modal ${!itemData.image && "no-img"}`} centered>
        <button className="fixed top-5 right-5 z-20 md:absolute" onClick={() => setShowModal(false)}>
          <img src={CloseIcon} alt="close" />
        </button>

        <div className="content gray-bg flex h-full flex-col md:flex-row">
          {/* Left Image */}
          {itemData.image && itemData.image !== "" && (
            <div className="flex-grow">
              <img className="h-full w-full object-cover" src={itemData.image} alt={itemData.name} />
            </div>
          )}

          {/* Right Detail */}
          <div className="detail gray-bg relative flex-shrink-0">
            {/* Top title */}
            <div className="fixed top-0 z-10 w-full bg-white px-6 py-[16px] text-center shadow-sm md:absolute">
              <h3 className={`secondary-title font-semibold uppercase ${hideTitle && "invisible"}`}>{itemData.name}</h3>
            </div>

            {/* Quantity Increase/Decrease and Add to Bag Buttons */}
            <div className="fixed bottom-0 z-10 flex w-full items-center justify-between gap-4 bg-white px-6 py-[16px] shadow md:absolute">
              <div className="flex w-24 items-center justify-between">
                <button className="rounded-full" onClick={decrease}>
                  <img src={CircleMinusIcon} alt="minus" />
                </button>
                <span className="gray text-xl font-semibold">{quantity}</span>
                <button className="rounded-full" onClick={increase}>
                  <img src={CirclePlusIcon} alt="plus" />
                </button>
              </div>

              <button
                className="primary-bg flex flex-grow justify-between rounded-full px-6 py-[12px] text-white duration-300 hover:bg-red-800"
                onClick={addToBag}
              >
                <h3 className="text-xl font-semibold">Add to Bag</h3>
                <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
              </button>
            </div>

            <div className="inner h-full w-full overflow-auto pb-32 md:pt-14" onScroll={handleScroll}>
              {/* Name, Price, Energy, Description and Nutrition */}
              <div className="bg-white p-6">
                <h3 className="primary-title mb-1 font-semibold uppercase">{itemData.name}</h3>
                <p className="mb-2 text-base font-semibold">
                  ${itemData.price.toFixed(2)}
                  {itemData.energy && itemData.energy !== 0 && <span> • {itemData.energy} kcal</span>}
                </p>
                <p className="font-medium">{itemData.description}</p>
                <div className="flex items-center justify-evenly p-[20px] text-center">
                  {itemData.nutrition.map((el, idx) => (
                    <Nutrition key={idx} variant={el} />
                  ))}
                </div>
              </div>

              {/* Required */}
              <div className="mb-[16px] bg-white px-6 py-2">
                <div className="border-bottom flex items-center justify-between py-[12px]">
                  <h4 className="secondary-title font-semibold uppercase">{itemData.required.name}</h4>
                  <p className="gray font-semibold">Required</p>
                </div>
                {itemData.required.items.map((element, index) => (
                  <div key={index} className="primary-check form-check pl-8 duration-300 hover:bg-gray-200">
                    <input
                      type="radio"
                      className="form-check-input mt-3.5 h-7 w-7 duration-200"
                      id={element.name}
                      name={itemData.required.name}
                      checked={required.name === element.name}
                      onChange={() => changeRequired(element)}
                    />
                    <label className="form-check-label flex cursor-pointer justify-between px-[12px] py-[16px]" htmlFor={element.name}>
                      <div>
                        <h4 className="secondary-title font-semibold capitalize">{element.name}</h4>
                        <p className="font-semibold">{element.energy && element.energy !== 0 && <span>{element.energy} kcal</span>}</p>
                      </div>
                      <p className="font-semibold">{element.price && element.price !== 0 && <span>${element.price.toFixed(2)}</span>}</p>
                    </label>
                  </div>
                ))}
              </div>

              {/* Optional */}
              <div className="mb-[16px] bg-white px-6 py-2">
                <div className="border-bottom flex items-center justify-between py-[12px]">
                  <h4 className="secondary-title font-semibold uppercase">{itemData.optional.name}</h4>
                  <p className="gray font-semibold">Optional (Select up to {itemData.optional.limit})</p>
                </div>
                {itemData.optional.items.map((element, index) => (
                  <div key={index} className="primary-check form-check pl-8 duration-300 hover:bg-gray-200">
                    <input
                      type="checkbox"
                      className="form-check-input mt-3.5 h-7 w-7 duration-200"
                      id={element.name}
                      name={itemData.optional.name}
                      checked={optional.findIndex((el) => el.name === element.name) >= 0}
                      onChange={(e) => changeOptional(e, element)}
                      disabled={!optional.some((el) => el.name === element.name) && disabled}
                    />
                    <label className="form-check-label flex cursor-pointer justify-between px-[12px] py-[16px]" htmlFor={element.name}>
                      <div>
                        <h4 className="secondary-title font-semibold capitalize">{element.name}</h4>
                        <p className="font-semibold">{element.energy && element.energy !== 0 && <span>{element.energy} kcal</span>}</p>
                      </div>
                      <p className="font-semibold">{element.price && element.price !== 0 && <span>${element.price.toFixed(2)}</span>}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default MenuBox
