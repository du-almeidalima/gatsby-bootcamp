import React from "react"
import { Link } from "gatsby"
import * as styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.AppNavbar}>
      <ul>
        <li><Link activeClassName={styles.active} to="/">Eduardo Gatsby</Link></li>
        <li><Link activeClassName={styles.active} to="/blog">Blog</Link></li>
        <li><Link activeClassName={styles.active} to="/contact">Contact</Link></li>
        <li><Link activeClassName={styles.active} to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
