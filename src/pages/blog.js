import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <div className="AppContainer">
        <h1>Blog!</h1>
        <p>Posts will be shown here!</p>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage
