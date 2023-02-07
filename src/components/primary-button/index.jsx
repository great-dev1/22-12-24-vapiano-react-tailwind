const PrimaryButton = ({ price, title }) => {
  return (
    <button className="primary-bg flex w-full justify-between rounded-full px-6 py-[12px] text-white duration-300 hover:bg-red-800">
      <p className="text-xl font-semibold">${price.toFixed(2)}</p>
      <h3 className="text-xl font-semibold">{title}</h3>
    </button>
  )
}

export default PrimaryButton
