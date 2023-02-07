import { useState } from "react"
import { Modal } from "react-bootstrap"
import CouponIcon from "../../../../assets/icons/coupon-icon.svg"
import CircleCloseIcon from "../../../../assets/icons/circle-close-icon.svg"

const CouponData = [
  {
    id: 1,
    discount: "50%",
    description: "Purchase 2 drinks to get 50% Off on a Vapiano Mug"
  },
  {
    id: 2,
    discount: "50%",
    description: "Purchase 2 drinks to get 50% Off on a Vapiano Mug"
  }
]

const Coupon = () => {
  const [showModal, setShowModal] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [coupon, setCoupon] = useState()

  return (
    <div>
      <div className="mb-2 flex items-center gap-3.5">
        <img className="mt-1" src={CouponIcon} alt="stall" />
        <h2 className="primary-title font-semibold">Coupons</h2>
        <button
          className="secondary-bg ml-auto rounded-full px-3.5 py-1.5 text-xs font-semibold text-white duration-300 hover:bg-gray-600"
          onClick={() => setShowModal(true)}
        >
          I have a coupon code
        </button>

        {/* Promo Code Modal */}
        <Modal show={showModal} backdrop="static" dialogClassName="sign-modal" centered>
          <button className="absolute top-4 right-4 z-10" onClick={() => setShowModal(false)}>
            <img src={CircleCloseIcon} alt="close" />
          </button>

          <div className="content flex h-full flex-col gap-8 p-7 pt-10">
            <h3 className="hero-title px-1 font-semibold">Have a promo code?</h3>
            <div className="form-floating">
              <input
                type="text"
                className="sign-input form-control rounded-none px-1 font-medium text-black"
                name="promoCode"
                id="promoCode"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Add promo code"
              />
              <label htmlFor="promoCode" className="px-1 font-medium">
                Add promo code
              </label>
            </div>
            <button
              className={`${
                promoCode === "" ? `gray light-gray-bg` : `primary-bg text-white`
              } h-10 w-full rounded-full text-sm font-medium uppercase`}
              disabled={promoCode === ""}
            >
              APPLY
            </button>
          </div>
        </Modal>
      </div>

      <div className="ml-2.5 border-l border-dashed border-gray-400 pl-6 pb-[16px]">
        <div className="flex flex-col gap-3 rounded-2xl bg-white px-6 py-[20px] shadow-sm">
          {CouponData.map((el, idx) => (
            <button
              key={idx}
              className={`coupon flex overflow-hidden rounded-xl border duration-300 ${el.id === coupon ? "primary-border" : "light-gray-border"}`}
              onClick={() => setCoupon(el.id)}
            >
              <div className={`flex w-[76px] flex-col items-center justify-center self-stretch ${el.id === coupon ? "primary-bg" : "bg-black"}`}>
                <h3 className="text-lg text-white">{el.discount}</h3>
                <p className="text-xs text-white">O F F</p>
              </div>
              <div className="p-[16px]">
                <p className="max-w-[200px] text-left text-sm">{el.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Coupon
