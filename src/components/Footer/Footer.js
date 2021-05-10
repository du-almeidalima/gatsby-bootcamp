import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "./Footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      site {
        siteMetadata {
          author
          github
        }
      }
    }
  `)

  return (
    <footer className={style.AppFooter}>
      <p>Created by {data.site.siteMetadata.author}, © 2021</p>
      <address>
        Github:{" "}
        <a
          href={data.site.siteMetadata.github}
          target="_blank"
          rel="noreferrer"
        >
          du-almeidalima
        </a>
      </address>
    </footer>
  )
}

export default Footer
