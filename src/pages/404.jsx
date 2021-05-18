import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1 className="AppPageTitle">Whoops... This page doesn't exist...</h1>
      <Link to="/">Back to our Home</Link>
    </Layout>
  )
}

export default NotFound
