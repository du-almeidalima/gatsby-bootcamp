import React from "react"
import { Link } from "gatsby"
import * as styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.AppNavbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
