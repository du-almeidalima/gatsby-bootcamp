import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="AppContainer">
        <h1>This is the about page!</h1>
        <a href="https://github.com/du-almeidalima" target="_blank" rel="noreferrer">Go to another dimension!</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quos!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloribus ducimus harum, impedit maxime
          natus neque nobis possimus, reiciendis sequi similique totam. Assumenda beatae culpa dolorem enim eum eveniet
          expedita fugit illo ipsam iste laborum minima molestias, nam odit quam quibusdam quo saepe sapiente, soluta
          tempore temporibus voluptate voluptatem. Quo.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default About
