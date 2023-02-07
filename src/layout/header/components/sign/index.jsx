import { useState } from "react"
import { Modal } from "react-bootstrap"
import validator from "validator"
import UserIcon from "../../../../assets/icons/user-icon.svg"
import CircleCloseIcon from "../../../../assets/icons/circle-close-icon.svg"
import GreenCheckIcon from "../../../../assets/icons/green-check-icon.svg"
import EyeOpenIcon from "../../../../assets/icons/eye-open-icon.svg"
import EyeClosedIcon from "../../../../assets/icons/eye-closed-icon.svg"
import "./sign.scss"

const Sign = () => {
  const [showStartModal, setShowStartModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validEmail, setValidEmail] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [agreed, setAgreed] = useState(false)

  const validateEmail = (e) => {
    setEmail(e.target.value)

    if (validator.isEmail(e.target.value)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  const getStarted = () => {
    setShowStartModal(false)
    setShowSignupModal(true)
  }

  return (
    <div>
      <button className="p-1" onClick={() => setShowStartModal(true)}>
        <img src={UserIcon} alt="user" />
      </button>

      {/* Get Started Modal */}
      <Modal show={showStartModal} backdrop="static" dialogClassName="sign-modal" centered>
        <button className="absolute top-4 right-4 z-10" onClick={() => setShowStartModal(false)}>
          <img src={CircleCloseIcon} alt="close" />
        </button>

        <div className="content flex h-full flex-col gap-8 p-7 pt-10">
          <h3 className="hero-title px-1 font-semibold">Get started with your email</h3>
          <div className="form-floating">
            <input
              type="email"
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="email"
              id="email"
              value={email}
              onChange={(e) => validateEmail(e)}
              placeholder="Enter email"
            />
            <label htmlFor="email" className="px-1 font-medium">
              Email Address
            </label>
            {validEmail && <img className="absolute top-1/2 right-0" src={GreenCheckIcon} alt="check" />}
          </div>

          <button
            className={`${!validEmail ? `gray light-gray-bg` : `primary-bg text-white`} h-10 w-full rounded-full text-sm font-medium uppercase`}
            onClick={getStarted}
            disabled={!validEmail}
          >
            CONTINUE
          </button>
        </div>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLoginModal} backdrop="static" dialogClassName="sign-modal" centered>
        <button className="absolute top-4 right-4 z-10" onClick={() => setShowLoginModal(false)}>
          <img src={CircleCloseIcon} alt="close" />
        </button>

        <div className="content flex h-full flex-col gap-8 p-7 pt-10">
          <h3 className="hero-title px-1 font-semibold">Login with Email</h3>
          <div className="form-floating">
            <input
              type="email"
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="email"
              id="email"
              value={email}
              onChange={(e) => validateEmail(e)}
              placeholder="Enter email"
            />
            <label htmlFor="email" className="px-1 font-medium">
              Email Address
            </label>
            {validEmail && <img className="absolute top-1/2 right-0" src={GreenCheckIcon} alt="check" />}
          </div>

          <div className="form-floating">
            <input
              type={showPassword ? "text" : "password"}
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <label htmlFor="password" className="px-1 font-medium">
              Password
            </label>
            <button onClick={() => setShowPassword(!showPassword)}>
              <img className="absolute top-1/4 right-0" src={showPassword ? EyeClosedIcon : EyeOpenIcon} alt="eye" />
            </button>
          </div>

          <button
            className={`${
              !validEmail || password === "" ? `gray light-gray-bg` : `primary-bg text-white`
            } h-10 w-full rounded-full text-sm font-medium uppercase`}
            disabled={!validEmail || password === ""}
          >
            SIGN IN
          </button>
        </div>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} backdrop="static" dialogClassName="sign-modal" centered>
        <button className="absolute top-4 right-4 z-10" onClick={() => setShowSignupModal(false)}>
          <img src={CircleCloseIcon} alt="close" />
        </button>

        <div className="content border-bottom flex h-full flex-col gap-8 px-7 pt-10 pb-[20px]">
          <h3 className="hero-title px-1 font-semibold">Create a Vapiano Account</h3>
          <div className="form-floating">
            <input
              type="text"
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
            <label htmlFor="firstName" className="px-1 font-medium">
              First Name<span className="primary">*</span>
            </label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
            <label htmlFor="lastName" className="px-1 font-medium">
              Last Name<span className="primary">*</span>
            </label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <label htmlFor="email" className="px-1 font-medium">
              Email Address<span className="primary">*</span>
            </label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="mobileNumber"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter mobile number"
            />
            <label htmlFor="mobileNumber" className="px-1 font-medium">
              Mobile Number<span className="primary">*</span>
            </label>
          </div>

          <div className="form-floating">
            <input
              type={showPassword ? "text" : "password"}
              className="sign-input form-control rounded-none px-1 font-medium text-black"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <label htmlFor="password" className="px-1 font-medium">
              Password<span className="primary">*</span>
            </label>
          </div>

          <div className="secondary-check form-check pl-[20px]">
            <input
              type="checkbox"
              className="form-check-input h-5 w-5 duration-200"
              id="agreed"
              name="agreed"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label className="form-check-label ml-2 cursor-pointer text-sm font-medium" htmlFor="agreed">
              Yes, I agree to receive news, exclusive offers and more from Vapiano
            </label>
          </div>
        </div>

        <div className="px-7 pt-[16px] pb-[20px]">
          <p className="mb-[16px] text-xs font-medium">
            By clicking Continue , you confirm that you accept our Terms & Conditions, and acknowledge our Privacy Policy and Refund Policy
          </p>
          <button
            className={`${
              firstName === "" || lastName === "" || email === "" || mobileNumber === "" || password === "" || !agreed
                ? `gray light-gray-bg`
                : `primary-bg text-white`
            } h-10 w-full rounded-full text-sm font-medium uppercase`}
            disabled={firstName === "" || lastName === "" || email === "" || mobileNumber === "" || password === "" || !agreed}
          >
            CONTINUE
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Sign
