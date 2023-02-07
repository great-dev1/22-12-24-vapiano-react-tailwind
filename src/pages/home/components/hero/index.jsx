import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import GoogleMap from "../../../../components/google-map"
import HeroImg from "../../../../assets/images/hero.jpg"
import ArrowIcon from "../../../../assets/icons/arrow-left-icon.svg"
import CloseIcon from "../../../../assets/icons/close-icon.svg"
import { Link } from "react-router-dom"
import "./hero.scss"

const OpeningHours = [
  {
    day: "Monday",
    from: "12:00 pm",
    to: "10:30 pm"
  },
  {
    day: "Tuesday",
    from: "12:00 pm",
    to: "10:30 pm"
  },
  {
    day: "Wednesday",
    from: "12:00 pm",
    to: "10:30 pm"
  },
  {
    day: "Thursday",
    from: "12:00 pm",
    to: "10:30 pm"
  },
  {
    day: "Friday",
    from: "12:00 pm",
    to: "11:15 pm"
  },
  {
    day: "Saturday",
    from: "12:00 pm",
    to: "11:15 pm"
  },
  {
    day: "Sunday",
    from: "12:00 pm",
    to: "10:30 pm"
  }
]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const apiKey = process.env.REACT_APP_API_KEY
const address = "One Tower Bridge, Potters Fields Park London"

const Hero = () => {
  const [show, setShow] = useState(false)
  const [location, setLocation] = useState({ lat: 0, lng: 0 })

  const today = new Date()
  const day = days[today.getDay()]

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        setLocation(jsonData.results[0].geometry.location)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="bg-white">
      <div className="container md:py-6">
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <div className="px-[12px] py-6 md:p-0 md:pr-6">
            <Link to="/" className="hover:primary my-[12px] inline-block duration-300">
              <div className="flex">
                <img src={ArrowIcon} alt="arrow" />
                <span className="ml-2 text-sm font-semibold">Back</span>
              </div>
            </Link>
            <h2 className="hero-title mb-[12px] font-semibold">Tower Bridge</h2>
            <p className="mb-1 font-medium">One Tower Bridge, Potters Fields Park London</p>
            <p className="gray mb-[16px] font-medium">Open until 5:00pm</p>
            <button className="hover:primary font-semibold underline duration-300" onClick={() => setShow(true)}>
              More info
            </button>

            <Modal show={show} backdrop="static" dialogClassName="info-modal" centered>
              <button className="absolute top-5 right-5 z-20" onClick={() => setShow(false)}>
                <img src={CloseIcon} alt="close" />
              </button>
              <div className="absolute top-0 z-10 w-full bg-white px-6 py-[16px] text-center shadow-sm">
                <h3 className="secondary-title font-semibold">Tower Bridge</h3>
              </div>

              <div className="content gray-bg">
                <div className="mt-14 bg-white p-6 pt-[16px]">
                  <h3 className="primary-title mb-2 font-semibold">Tower Bridge</h3>
                  <p className="font-medium">
                    Handmade fresh pasta, sourdough pizza & freshest insalata all made to order. All our food is cooked fresh, exactly as you like it.
                    Extra chilli? Sure. No garlic? No problem. Dishes are served as soon as they are cooked so may arrive at slightly different times.
                    If you have any allergens, please do let us know. Enjoy!
                  </p>
                </div>

                <div className="h-72 w-full">
                  <GoogleMap location={location} />
                </div>

                <div className="my-2 bg-white px-6 py-[16px] font-semibold">
                  <h4 className="border-bottom mb-[20px] pb-[16px] uppercase">Opening hours</h4>
                  {OpeningHours.map((el, idx) => (
                    <div key={idx} className={`mb-[16px] flex items-center justify-between ${el.day === day && "primary"}`}>
                      <p className="capitalize">{el.day}</p>
                      <p className="uppercase">
                        {el.from} - {el.to}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-white px-6 py-[16px] font-semibold">
                  <h4 className="border-bottom mb-[12px] pb-[16px] uppercase">Imprint</h4>
                  <p>Javier Lomeli</p>
                  <a href="#" className="primary">
                    javier.lomeli@vapiano.eu
                  </a>
                </div>
              </div>
            </Modal>
          </div>

          <img className="hero-img" src={HeroImg} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
