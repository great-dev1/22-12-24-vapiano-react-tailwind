import ArrowIcon from "../../../../assets/icons/arrow-icon.svg"
import PencilIcon from "../../../../assets/icons/pencil-icon.svg"

const Table = () => {
  return (
    <div className="mb-[16px] rounded-3xl bg-white px-6 shadow-sm">
      <div className="border-bottom flex h-14 items-center">
        <p className="secondary-title mr-2 w-20 font-semibold">Order</p>
        <h4 className="secondary-title mr-auto font-semibold">Table Service</h4>
        <img src={ArrowIcon} alt="arrow" />
      </div>

      <div className="flex h-14 items-center justify-between">
        <p className="secondary-title mr-2 w-20 font-semibold">for</p>
        <h4 className="secondary-title mr-auto font-semibold">Add table number</h4>
        <img src={PencilIcon} alt="pencil" />
      </div>
    </div>
  )
}

export default Table
