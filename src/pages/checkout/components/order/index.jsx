import { useState, useEffect } from "react"
import ReactSlider from "react-slider"
import "./order.scss"

const Order = ({ bagData }) => {
  console.log("BAG_DATA", bagData)
  const [tip, setTip] = useState(10)
  const [subtotal, setSubtotal] = useState(0)
  const [gratuity, setGratuity] = useState(0)
  const [discount] = useState(5.3)
  const [tax] = useState(3.5)
  const [totalPrice, setTotalPrice] = useState(0)

  const calcSubtotal = () => {
    let temp = 0
    bagData.forEach((el) => (temp += el.unitPrice * el.quantity))
    setSubtotal(temp)
  }

  useEffect(() => {
    calcSubtotal()
  }, [bagData])

  useEffect(() => {
    setGratuity((subtotal * tip) / 100)
  }, [subtotal, tip])

  useEffect(() => {
    setTotalPrice(subtotal + gratuity - discount + tax)
  }, [subtotal, gratuity, discount, tax])

  return (
    <div className="mx-auto max-w-[410px] px-6 py-10 xl:py-20">
      {/* Place Order Button */}
      <div className="border-bottom pb-[20px]">
        <button className="secondary-bg secondary-title w-full rounded-full p-[16px] font-semibold text-white duration-300 hover:bg-gray-500">
          PLACE ORDER
        </button>
      </div>

      {/* Tip */}
      <div className="flex justify-between gap-11 py-6">
        <h4 className="secondary-title w-[140px] flex-shrink-0 font-semibold">Opt. Add Tips ({tip}%)</h4>
        <ReactSlider
          className="w-full"
          trackClassName="tip-slider-track"
          thumbClassName="tip-slider-thumb"
          min={0}
          max={100}
          value={tip}
          onChange={(val) => setTip(val)}
        />
      </div>

      {/* Sub Prices */}
      <div className="border-bottom pt-11 pb-7">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Subtotal</h4>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Tip</h4>
          <p>${gratuity.toFixed(2)}</p>
        </div>
        <div className="green flex items-center justify-between">
          <h4 className="font-semibold">Buy one get 1 free</h4>
          <p>-${discount.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Tax</h4>
          <p>${tax.toFixed(2)}</p>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center justify-between py-[16px]">
        <h4 className="text-lg font-semibold">Total</h4>
        <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Order
