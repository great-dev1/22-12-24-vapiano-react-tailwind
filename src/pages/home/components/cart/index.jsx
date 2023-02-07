import { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import ReactSlider from "react-slider"
import PrimaryButton from "../../../../components/primary-button"
import CloseIcon from "../../../../assets/icons/close-icon.svg"
import ArrowIcon from "../../../../assets/icons/arrow-icon.svg"
import InfoIcon from "../../../../assets/icons/info-icon.svg"
import Image1 from "../../../../assets/images/img01.jpeg"
import Image2 from "../../../../assets/images/img02.jpeg"
import Image3 from "../../../../assets/images/img03.jpeg"
import Image4 from "../../../../assets/images/img04.jpeg"
import "./cart.scss"

const OrderData = [
  {
    count: 3,
    name: "BRUSCHETTA AI FUNGHI ANTIPASTI",
    price: 7.25
  },
  {
    count: 1,
    name: "Pomodoro",
    content: ["Fusilli", "Medium chili", "Add.Chicken (May contain bones) (+ $2.95)"],
    price: 14.95
  }
]

const SlidesData = [
  {
    name: "Green Olives",
    price: 2.5,
    image: Image1
  },
  {
    name: "Nutella Cheesecake",
    price: 6.15,
    image: Image2
  },
  {
    name: "Vapiano Organic Ice Tea",
    price: 4.95,
    image: Image3
  },
  {
    name: "Garlic Bread",
    price: 6.15,
    image: Image4
  }
]

const settings = {
  arrows: false,
  infinite: false
}

const Cart = () => {
  const slider = useRef()
  const [tip, setTip] = useState(10)
  const [subtotal, setSubtotal] = useState(0)
  const [vat, setVat] = useState(0)
  const [gratuity, setGratuity] = useState(0)
  const [total, setTotal] = useState(0)

  const calcPrice = async () => {
    let temp = 0
    OrderData.forEach((el) => (temp += el.price))
    setSubtotal(temp)
    setVat(temp * 0.2)
    setGratuity((temp * tip) / 100)
    setTotal(temp * (1.2 + tip / 100))
  }

  useEffect(() => {
    calcPrice()
  }, [tip])

  return (
    <div className="sticky top-20 rounded-3xl bg-white shadow-sm">
      {OrderData.length === 0 ? (
        <p className="p-[20px] font-semibold">Your cart will show up here</p>
      ) : (
        <>
          {/* Order */}
          {OrderData.map((el, idx) => (
            <div key={idx} className="order-item flex justify-between">
              <p className="mr-[12px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-500 font-semibold text-white">
                {el.count}
              </p>
              <div className="mr-auto">
                <h4 className="secondary-title font-semibold uppercase">{el.name}</h4>
                {el.content?.map((element, index) => (
                  <p key={index} className="desciption">
                    {element}
                  </p>
                ))}
              </div>
              <p className="mr-[12px] text-right font-semibold leading-6">{el.price.toFixed(2)}</p>
              <button className="mt-1 self-start">
                <img src={CloseIcon} width={20} alt="close" />
              </button>
            </div>
          ))}

          {/* Slider */}
          <div className="gray-bg pb-6">
            <div className="flex items-center justify-between px-6 py-[16px]">
              <h3 className="font-semibold uppercase">You may enjoy one of these</h3>
              <div>
                <button className="px-2 py-1" onClick={() => slider.current.slickPrev()}>
                  <img className="rotate-90" src={ArrowIcon} alt="arrow" />
                </button>
                <button className="px-2 py-1" onClick={() => slider.current.slickNext()}>
                  <img className="-rotate-90" src={ArrowIcon} alt="arrow" />
                </button>
              </div>
            </div>

            <Slider {...settings} ref={slider}>
              {SlidesData.map((el, idx) => (
                <div key={idx} className="px-[16px]">
                  <button className="flex w-full justify-between gap-3 rounded-3xl bg-white p-6 pt-[16px] text-left">
                    <div>
                      <h4 className="secondary-title mb-1 font-semibold capitalize">{el.name}</h4>
                      <p className="font-semibold">${el.price.toFixed(2)}</p>
                    </div>
                    <img className="h-20 w-full max-w-[80px] flex-shrink-0 rounded-lg object-cover" src={el.image} alt={el.title} />
                  </button>
                </div>
              ))}
            </Slider>
          </div>

          {/* Tip */}
          <div className="border-bottom mx-6 flex justify-between py-[16px]">
            <h4 className="tip-title secondary-title flex-shrink-0 font-semibold">Opt. Gratuity ({tip}%)</h4>
            <img className="mx-[12px]" src={InfoIcon} alt="info" />
            <ReactSlider
              className="tip-slider"
              trackClassName="tip-slider-track"
              thumbClassName="tip-slider-thumb"
              min={0}
              max={100}
              value={tip}
              onChange={(val) => setTip(val)}
            />
          </div>

          {/* Total Price */}
          <div className="px-6 py-[20px]">
            <div className="flex justify-between">
              <h4 className="font-semibold">Subtotal</h4>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between">
              <h4 className="font-semibold">VAT (20.00%)</h4>
              <p>${vat.toFixed(2)}</p>
            </div>

            <div className="flex justify-between">
              <h4 className="font-semibold">Opt. Gratuity</h4>
              <p>${gratuity.toFixed(2)}</p>
            </div>

            <div className="mt-[16px] flex justify-between">
              <h3 className="primary-title font-semibold">Total</h3>
              <p className="primary-title font-semibold">${total.toFixed(2)}</p>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="px-[12px] pt-2 pb-[12px]">
            <PrimaryButton price={total.toFixed(2)} title="Checkout" />
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
