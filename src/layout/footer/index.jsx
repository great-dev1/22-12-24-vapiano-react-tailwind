import { Link } from "react-router-dom"
// import { Form } from "react-bootstrap"
import "./footer.scss"

const FooterLinks = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Terms of Service",
    url: "/"
  },
  {
    name: "Privacy Policy",
    url: "/"
  },
  {
    name: "GDPR request form",
    url: "/"
  }
]

const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex flex-col md:flex-row md:items-center">
        {/* <Form className="mr-[20px] self-start py-2 md:self-center">
          <Form.Check className="pl-[12px]" type="switch" id="custom-switch" label="High contrast" />
        </Form> */}

        {FooterLinks.map((el, idx) => (
          <Link key={idx} className="px-[12px] py-2 text-gray-300 duration-300" to={el.url}>
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
