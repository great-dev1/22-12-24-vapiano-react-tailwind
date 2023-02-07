import MenuBox from "../../../../components/menu-card"
import LemonIcon from "../../../../assets/icons/lemon-icon.svg"

const Menu = ({ menuData, bagData, setBagData }) => {
  return (
    <>
      {menuData.map((el, idx) => (
        <div key={idx} className="pb-6" id={el.category}>
          <div className="ml-2">
            <div className="flex items-center">
              <img className="mr-[16px] w-8" src={LemonIcon} alt="lemon" />
              <h3 className="primary-title font-semibold uppercase">{el.category}</h3>
            </div>
            {el.time && el.time !== "" && <h4 className="py-1 text-base">{el.time}</h4>}
            {el.description && el.description !== "" && <p className="mt-1">{el.description}</p>}
          </div>

          <div className="mt-[16px] grid grid-cols-1 gap-4 lg:grid-cols-2">
            {el.items.map((element, index) => (
              <MenuBox key={index} itemData={element} bagData={bagData} setBagData={setBagData} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Menu
