import { useState } from "react"
import { Link } from "react-router-dom"
import Sign from "./components/sign"
import Logo from "../../assets/icons/logo.svg"
import UserIcon from "../../assets/icons/user-icon.svg"
import "./header.scss"

const Header = () => {
  const firstName = "Sam"
  const [logged, setLogged] = useState(true)
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="primary-bg relative shadow-sm">
      <div className="container py-[12px]">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} width="150" alt="logo" />
          </Link>
          {logged ? (
            <div className="relative p-1" onMouseOver={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <button className="profile-btn flex items-center gap-2 rounded-full py-1 pl-2 pr-[16px]">
                <img src={UserIcon} alt="user" />
                <span className="font-medium text-white">Hi, {firstName}</span>
              </button>

              {/* Profile Dropdown */}
              <div
                className={`absolute top-9 right-0 flex h-48 w-52 flex-col justify-between rounded-2xl bg-white p-[16px] pt-6 shadow-sm duration-300 ${
                  !showDropdown && "invisible opacity-0"
                }`}
              >
                <Link to="/" className="hover:primary px-[12px] py-2 text-base font-semibold duration-300">
                  Account Details
                </Link>
                <Link to="/" className="hover:primary px-[12px] py-2 text-base font-semibold duration-300">
                  Order History
                </Link>
                <Link to="/" className="hover:primary px-[12px] py-2 text-base font-semibold duration-300">
                  Vapiano Wallet
                </Link>
                <button
                  className="hover:primary-bg gray-bg gray mt-1 rounded-full p-2 font-medium duration-300 hover:text-white"
                  onClick={() => setLogged(false)}
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <Sign />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
