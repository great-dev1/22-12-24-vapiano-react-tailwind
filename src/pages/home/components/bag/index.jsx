import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SelectBox from "../../../../components/select-box"
import CircleBagIcon from "../../../../assets/icons/circle-bag-icon.svg"
import BagIcon from "../../../../assets/icons/bag-icon.svg"

const Bag = ({ bagData, setBagData }) => {
  console.log("BAG_DATA: ", bagData)
  const [totalPrice, setTotalPrice] = useState(0)

  const calcTotalPrice = () => {
    let temp = 0
    bagData.forEach((el) => (temp += el.unitPrice * el.quantity))
    setTotalPrice(temp)
  }

  useEffect(() => {
    calcTotalPrice()
  }, [bagData])

  return (
    <div className="sticky top-20 mb-[12px]">
      {bagData.length === 0 ? (
        <div className="flex h-36 flex-col items-center justify-center rounded-3xl bg-white shadow-sm">
          <img src={CircleBagIcon} alt="bag" />
          <p className="mt-2 font-medium">Your bag items will appear here</p>
        </div>
      ) : (
        <div className="rounded-3xl bg-white shadow-sm">
          <div className="border-bottom flex items-center justify-center gap-2 p-2">
            <img src={BagIcon} alt="bag" />
            <h3 className="primary-title font-semibold">Bag</h3>
          </div>

          {bagData.map((el, idx) => (
            <div key={idx} className="border-bottom flex px-6 py-[16px]">
              <SelectBox bagData={bagData} setBagData={setBagData} bagItem={el} />
              <div className="mr-auto">
                <h4 className="my-1 font-semibold">{el.name}</h4>
                <p className="gray text-sm">
                  {el.required.name} {el.required.price && <span>(${el.required.price})</span>}
                </p>
                {el.optional.length > 0 &&
                  el.optional.map((element, index) => (
                    <p key={index} className="gray text-sm">
                      {element.name} {element.price && <span>(${element.price.toFixed(2)})</span>}
                    </p>
                  ))}
              </div>
              <p className="mt-1 font-semibold">${(el.unitPrice * el.quantity).toFixed(2)}</p>
            </div>
          ))}

          <div className="p-[12px]">
            <Link
              to="/checkout"
              className="secondary-bg secondary-title flex items-center justify-center rounded-full p-[12px] font-semibold text-white duration-300 hover:bg-gray-500"
            >
              Go to Checkout <span className="mx-1">•</span> ${totalPrice.toFixed(2)}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bag
