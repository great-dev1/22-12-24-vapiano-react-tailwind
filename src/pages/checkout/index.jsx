import { useEffect } from "react"
import { Link } from "react-router-dom"
import Pickup from "./components/pickup"
import Payment from "./components/payment"
import Coupon from "./components/coupon"
import Bag from "./components/bag"
import Order from "./components/order"
import Logo from "../../assets/icons/logo-red.svg"

const Checkout = ({ bagData, setBagData }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <section className="p-[16px] lg:w-1/2 xl:w-3/5 xl:px-20 xl:py-8">
        <div className="max-w-xl">
          <Link to="/">
            <img className="mb-8" src={Logo} alt="logo" />
          </Link>
          <Pickup />
          <Payment />
          <Coupon />
          <Bag bagData={bagData} setBagData={setBagData} />
        </div>
      </section>

      <section className="bg-white lg:w-1/2 xl:w-2/5">
        <div className="sticky top-0">
          <Order bagData={bagData} />
        </div>
      </section>
    </div>
  )
}

export default Checkout
