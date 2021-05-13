import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="AppContainer">
        { children }
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
