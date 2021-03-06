import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./Navbar.module.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query MenuLinksQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <nav className={styles.AppNavbar}>
      <ul>
        {data.site.siteMetadata.menuLinks.map(ml => (
          <li key={ml.name}>
            <Link 
              to={ml.link}
              activeClassName={styles.active} 
              partiallyActive={true}
            >
              {ml.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
