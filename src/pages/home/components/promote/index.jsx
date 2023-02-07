import CouponImg from "../../../../assets/icons/coupon.svg"
import ArrowIcon from "../../../../assets/icons/arrow-icon.svg"
import "./promote.scss"

const Promote = () => {
  return (
    <div className="promote-box mb-[12px] flex items-center rounded-3xl bg-white p-6 shadow-sm">
      <img src={CouponImg} alt="coupon" />
      <div className="ml-[16px] mr-auto">
        <h4 className="title font-semibold">Promote Codes</h4>
        <p>Apply your code here</p>
      </div>
      <img className="-rotate-90" src={ArrowIcon} alt="arrow" />
    </div>
  )
}

export default Promote
