import { useState } from "react"
import { Modal } from "react-bootstrap"
import IMask from "imask"
import { IMaskInput } from "react-imask"
import CardIcon from "../../../../assets/icons/card-icon.svg"
import CircleCloseIcon from "../../../../assets/icons/circle-close-icon.svg"

const Payment = () => {
  const [showModal, setShowModal] = useState(false)
  const [cardHolder, setCardHolder] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [securityCode, setSecurityCode] = useState("")
  const [card, setCard] = useState({})

  return (
    <div>
      <div className="mb-2 flex items-center gap-3.5">
        <img className="mt-1" src={CardIcon} alt="card" />
        <h2 className="primary-title font-semibold">Payment Method</h2>
      </div>

      <div className="ml-2.5 border-l border-dashed border-gray-400 pl-6 pb-[16px]">
        <div className="rounded-2xl bg-white p-[20px] pb-6 shadow-sm">
          <div className="primary-check form-check pl-8">
            <input type="radio" className="form-check-input mt-1.5 h-5 w-5 duration-200" id="vapiano" name="payment" />
            <label className="form-check-label flex cursor-pointer items-center gap-4 py-2 pl-[20px]" htmlFor="vapiano">
              <h3 className="font-medium">Vapiano Balance</h3>
              <h3 className="primary font-medium">$120</h3>
            </label>
          </div>
          <div className="my-[12px] ml-7 h-px bg-gray-300" />
          {card && card.cardNumber ? (
            <div className="primary-check form-check pl-8">
              <input type="radio" className="form-check-input mt-1.5 h-5 w-5 duration-200" id="credit" name="payment" />
              <label className="form-check-label flex cursor-pointer items-start justify-between py-2 pl-[20px]" htmlFor="credit">
                <div>
                  <h3 className="font-medium">Credit Card</h3>
                  <p className="text-xs font-medium">{card.cardNumber}</p>
                </div>
                <button className="light-gray-bg rounded-full px-[16px] py-1.5 text-xs font-medium duration-300 hover:bg-gray-600 hover:text-white">
                  Edit
                </button>
              </label>
            </div>
          ) : (
            <div className="primary-check form-check pl-8">
              <input type="radio" className="form-check-input mt-1.5 h-5 w-5" disabled />
              <h3 className="py-2 pl-[20px] font-medium">Credit or Debit Card</h3>
              <button
                className="mx-auto mt-2 w-[414px] rounded-full border !border-black p-2 duration-300 hover:bg-[#2C2C31] hover:text-white"
                onClick={() => setShowModal(true)}
              >
                <span className="text-lg font-semibold">ADD PAYMENT CARD</span>
              </button>

              {/* Add Payment Card Modal */}
              <Modal show={showModal} backdrop="static" dialogClassName="sign-modal" centered>
                <button className="absolute top-4 right-4 z-10" onClick={() => setShowModal(false)}>
                  <img src={CircleCloseIcon} alt="close" />
                </button>

                <div className="content flex h-full flex-col gap-8 p-7 pt-10">
                  <h3 className="hero-title px-1 font-semibold">Add Payment Card</h3>

                  <div className="form-floating">
                    <input
                      type="text"
                      className="sign-input form-control rounded-none px-1 font-medium text-black"
                      name="cardHolder"
                      id="cardHolder"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      placeholder="Card Holder Name"
                    />
                    <label htmlFor="cardHolder" className="px-1 font-medium">
                      Card Holder Name
                    </label>
                  </div>

                  <div className="form-floating">
                    <IMaskInput
                      className="sign-input form-control rounded-none px-1 font-medium text-black"
                      mask={Number}
                      unmask={false}
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Card Number"
                      onAccept={(value) => setCardNumber(value)}
                    />
                    <label htmlFor="cardNumber" className="px-1 font-medium">
                      Card Number
                    </label>
                  </div>

                  <div className="flex gap-5">
                    <div className="">
                      <label htmlFor="expiryDate" className="px-1 font-medium">
                        Expiry Date*
                      </label>
                      <IMaskInput
                        className="sign-input form-control rounded-none px-1 font-medium text-black"
                        mask={"MM/YY"}
                        blocks={{
                          YY: {
                            mask: "00"
                          },
                          MM: {
                            mask: IMask.MaskedRange,
                            from: 1,
                            to: 12
                          }
                        }}
                        unmask={false}
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        onAccept={(value) => setExpiryDate(value)}
                      />
                    </div>

                    <div className="">
                      <label htmlFor="securityCode" className="px-1 font-medium">
                        Security Code*
                      </label>
                      <input
                        type="text"
                        className="sign-input form-control rounded-none px-1 font-medium text-black"
                        id="securityCode"
                        name="securityCode"
                        value={securityCode}
                        onChange={(e) => {
                          if (/^\d{0,4}$/.test(e.target.value) === true) setSecurityCode(e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <button
                    className={`${
                      cardHolder === "" || cardNumber === "" || expiryDate === "" || securityCode === ""
                        ? `gray light-gray-bg`
                        : `primary-bg text-white`
                    } h-10 w-full rounded-full text-sm font-medium uppercase`}
                    disabled={cardHolder === "" || cardNumber === "" || expiryDate === "" || securityCode === ""}
                    onClick={() => {
                      setCard({
                        cardHolder,
                        cardNumber,
                        expiryDate,
                        securityCode
                      })
                    }}
                  >
                    Add Card
                  </button>
                </div>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Payment
