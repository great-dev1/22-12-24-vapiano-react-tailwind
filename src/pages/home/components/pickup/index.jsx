import { useState } from "react"
import { Modal } from "react-bootstrap"
import PositionIcon from "../../../../assets/icons/position-icon.svg"
import CalendarIcon from "../../../../assets/icons/calendar-icon.svg"
import CircleCloseIcon from "../../../../assets/icons/circle-close-icon.svg"
import ArrowDown from "../../../../assets/icons/arrow-down-icon.svg"
import "./pickup.scss"

const Pickup = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="mb-[12px] rounded-3xl bg-white p-[12px] pt-[20px] shadow-sm">
      <h3 className="primary-title mb-1 px-2 font-semibold">Pickup</h3>
      <p className="mb-[16px] flex gap-2 px-2">
        <img src={PositionIcon} alt="position" />
        <span className="font-medium">One Tower Brdige, Potters Fields Park London</span>
      </p>
      <button className="pickup-btn flex h-11 w-full items-center justify-center gap-3 rounded-full" onClick={() => setShow(true)}>
        <img src={CalendarIcon} alt="calendar" />
        <p className="text-base font-medium">Tue, Nov 11 @11:45AM</p>
        <img src={ArrowDown} alt="down" />
      </button>

      <Modal show={show} backdrop="static" dialogClassName="pickup-modal" centered>
        <button className="absolute top-4 right-4 z-10" onClick={() => setShow(false)}>
          <img src={CircleCloseIcon} alt="close" />
        </button>

        <div className="content flex h-full flex-col p-[12px]">
          <p className="mt-[20px] mb-2 px-[12px] font-medium">Select Pickup Date</p>
          <button className="pickup-btn flex h-11 w-full items-center justify-between rounded-full px-[20px]">
            <p className="text-base font-medium">Today</p>
            <img src={ArrowDown} alt="arrow" />
          </button>
          <p className="mt-[16px] mb-2 px-[12px] font-medium">Select Pickup Time</p>
          <button className="pickup-btn mb-auto flex h-11 w-full items-center justify-between rounded-full px-[20px]">
            <p className="text-base font-medium">ASAP</p>
            <img src={ArrowDown} alt="arrow" />
          </button>
          <button className="primary-bg h-10 w-full rounded-full font-semibold uppercase text-white" onClick={() => setShow(false)}>
            Update Order Time
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Pickup
