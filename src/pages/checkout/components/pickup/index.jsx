import StallIcon from "../../../../assets/icons/stall-icon.svg"
import PositionIcon from "../../../../assets/icons/position-icon.svg"
import CalendarIcon from "../../../../assets/icons/calendar-icon.svg"

const Pickup = () => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-3.5">
        <img className="mt-1" src={StallIcon} alt="stall" />
        <h2 className="primary-title font-semibold">Pickup</h2>
      </div>

      <div className="ml-2.5 border-l border-dashed border-gray-400 pl-6 pb-[16px]">
        <div className="rounded-2xl bg-white p-[20px] pb-6 shadow-sm">
          <div className="flex gap-3.5">
            <img className="mt-2 self-start" src={PositionIcon} alt="position" />
            <div>
              <h3 className="secondary-title font-semibold">Vapiano - Tower Bridge</h3>
              <p className="text-xs font-medium">One Tower Bridge, Potters Fields Park London</p>
            </div>
          </div>
          <div className="my-[16px] ml-7 h-px bg-gray-300" />
          <div className="flex items-center gap-2.5">
            <img className="mt-1.5 self-start" src={CalendarIcon} alt="calendar" />
            <h3 className="mr-auto font-medium">Tue, Nov 11 @11:45AM</h3>
            <button className="light-gray-bg rounded-full px-[16px] py-1.5 text-xs font-medium duration-300 hover:bg-gray-600 hover:text-white">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pickup
