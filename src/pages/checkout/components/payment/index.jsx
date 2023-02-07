import CardIcon from "../../../../assets/icons/card-icon.svg"

const Payment = () => {
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
          <div className="primary-check form-check pl-8">
            <input type="radio" className="form-check-input mt-1.5 h-5 w-5 duration-200" id="credit" name="payment" />
            <label className="form-check-label flex cursor-pointer items-start justify-between py-2 pl-[20px]" htmlFor="credit">
              <div>
                <h3 className="font-medium">Credit Card</h3>
                <p className="text-xs font-medium">****1230</p>
              </div>
              <button className="light-gray-bg rounded-full px-[16px] py-1.5 text-xs font-medium duration-300 hover:bg-gray-600 hover:text-white">
                Edit
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
