import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Made by Mayank Pathak</p>
        <p className="footerlinks">
          <a href="https://github.com/mayank-pathakk">Github </a>

          <a href="https://www.linkedin.com/in/mayank-pathak-url321/">
            LinkedIn
          </a>

          <a href="https://drive.google.com/file/d/1YPabW_g_EJoCIklVwDhKPSFt-BXx_wDY/view?usp=sharing">
            CV
          </a>
        </p>
      </footer>
    </div>
  )
}
