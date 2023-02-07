import { Link } from "react-router-dom"
import SelectBox from "../../../../components/select-box"
import BagIcon from "../../../../assets/icons/bag-icon-dark.svg"

const Bag = ({ bagData, setBagData }) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-3.5">
        <img className="mt-1" src={BagIcon} alt="bag" />
        <h2 className="primary-title font-semibold">Your Items</h2>
        <Link
          to="/"
          className="light-gray-bg ml-auto rounded-full px-[16px] py-1.5 text-xs font-semibold duration-300 hover:bg-gray-600 hover:text-white"
        >
          + Add Items
        </Link>
      </div>

      <div className="ml-2.5 pl-6 pb-[16px]">
        <div className="flex flex-col gap-3 rounded-2xl bg-white px-7 py-[20px] shadow-sm">
          {bagData.map((el, idx) => (
            <div key={idx} className="border-bottom flex py-[16px]">
              <SelectBox bagData={bagData} setBagData={setBagData} bagItem={el} />
              <div className="mr-auto">
                <h4 className="my-1 font-semibold">{el.name}</h4>
                <p className="font-semibold">${(el.unitPrice * el.quantity).toFixed(2)}</p>
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
              <img className="h-20 w-20 rounded-lg object-cover" src={el.thumb} alt={el.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bag
