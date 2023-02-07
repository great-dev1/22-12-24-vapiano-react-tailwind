import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
