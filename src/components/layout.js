import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import classes from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
