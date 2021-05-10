import React from "react"
import * as style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.AppFooter}>
      <p>Created by Eduardo Lima, © 2021</p>
      <address>
        Github: <a href="https://github.com/du-almeidalima" target="_blank" rel="noreferrer">du-almeidalima</a>
      </address>
    </footer>
  )
}

export default Footer
