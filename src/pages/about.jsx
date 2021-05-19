import React from "react"
import Head from "../components/Head/Head"
import Layout from "../components/Layout/Layout"

const About = () => {
  return (
    <Layout>
      <Head pageTitle="About"/>
      <h1 className="AppPageTitle">This is the about page!</h1>
      <a href="https://github.com/du-almeidalima" target="_blank" rel="noreferrer">Go to another dimension!</a>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quos!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloribus ducimus harum, impedit maxime
        natus neque nobis possimus, reiciendis sequi similique totam. Assumenda beatae culpa dolorem enim eum eveniet
        expedita fugit illo ipsam iste laborum minima molestias, nam odit quam quibusdam quo saepe sapiente, soluta
        tempore temporibus voluptate voluptatem. Quo.
      </p>
    </Layout>
  )
}

export default About
