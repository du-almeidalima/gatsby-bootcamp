import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <div className="AppContainer">
        <h1 className="AppPageTitle">Gatsby Bootcamp</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, animi consequuntur dicta earum eos eum
          eveniet exercitationem fugiat illo incidunt laudantium libero minus molestiae molestias nam natus nihil nobis
          odio odit officia perferendis possimus qui quidem quo reiciendis rem saepe sed sint sunt tenetur ullam ut
          veniam veritatis? Ad aperiam delectus deleniti dicta dolore, dolorem ea error et ex facilis fugiat fugit hic
          inventore laudantium minus natus nobis nulla officia optio porro quasi qui sunt temporibus tenetur voluptas!
          Ad alias architecto beatae dolore doloremque explicabo fugiat in iste laboriosam magnam maiores, nisi officiis
          pariatur quam, quibusdam quis quo, rem ut!
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
