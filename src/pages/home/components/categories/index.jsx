// import { useRef } from "react"
import ScrollspyNav from "react-scrollspy-nav"
// import Slider from "react-slick"
// import { Dropdown } from "react-bootstrap"
// import ArrowIcon from "../../../../assets/icons/arrow-icon.svg"
// import ArrowIcon from "../../../../assets/icons/arrow-right-icon.svg"
import "./categories.scss"

// const settings = {
//   arrows: false,
//   // focusOnSelect: true,
//   slidesToShow: 1,
//   infinite: false,
//   swipeToSlide: true,
//   variableWidth: true
// }

const Categories = ({ categoriesData }) => {
  // const slider = useRef()

  return (
    <div className="top-0 z-10 w-full bg-white shadow-sm md:sticky">
      <div className="container flex items-center justify-between gap-3">
        {/* Desktop */}
        {/* <div className="hidden items-center justify-between gap-16 xl:flex">
          <div className="flex flex-grow justify-between">
            {categoriesData.slice(0, 6).map((el, index) => (
              <button key={index} className="category-nav rounded-full px-[12px] py-2 font-semibold uppercase duration-300">
                {el}
              </button>
            ))}
          </div>

          <Dropdown className="category-dropdown" align="end">
            <Dropdown.Toggle className="flex items-center border-0">
              <span className="duration-300">More</span>
              <img className="iniine duration-300" src={ArrowIcon} alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="overflow-y-auto overflow-x-hidden border-0 shadow-sm">
              {categoriesData.slice(6).map((el, index) => (
                <Dropdown.Item key={index} href="#/action-1" className="px-8 py-[20px] uppercase">
                  {el}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div> */}

        {/* Mobile */}
        <ScrollspyNav scrollTargetIds={categoriesData} activeNavClass="is-active" scrollDuration="100">
          <div className="flex flex-wrap gap-x-4 gap-y-2 py-[12px]">
            {/* <Slider {...settings} ref={slider}> */}
            {categoriesData.map((el, idx) => (
              <div key={idx} className="cursor-pointer">
                <a href={`#${el}`} className="category-nav inline-block rounded-full px-[12px] py-2 font-semibold uppercase duration-300">
                  {el}
                </a>
              </div>
            ))}
            {/* </Slider> */}
          </div>
        </ScrollspyNav>

        {/* <button className="p-1" onClick={() => slider.current.slickNext()}>
          <img src={ArrowIcon} alt="arrow" />
        </button> */}
      </div>
    </div>
  )
}

export default Categories
