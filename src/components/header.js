import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import classes from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={classes.Header}>
      <h1>
        <Link className={classes.Title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={classes.NavList}>
          <li>
            <Link
              className={classes.NavItem}
              activeClassName={classes.ActiveNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classes.NavItem}
              activeClassName={classes.ActiveNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={classes.NavItem}
              activeClassName={classes.ActiveNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={classes.NavItem}
              activeClassName={classes.ActiveNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
