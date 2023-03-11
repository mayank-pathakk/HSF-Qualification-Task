import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as syles from "../styles/global.css"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <img src="https://www.sravikiran.com/GSOC18//images/gsoc18.jpg" />
      <div className="links">
        <a href="https://hepsoftwarefoundation.org/training/curriculum.html">
          About HSF
        </a>

        <Link to="/">Login</Link>
        <Link to="https://github.com/mayank-pathakk">Github</Link>
      </div>
    </nav>
  )
}
