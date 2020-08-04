import React, { Component } from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
