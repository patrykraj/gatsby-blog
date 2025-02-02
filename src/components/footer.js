import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={classes.footer}>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
    </footer>
  )
}

export default Footer
