import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Navigation = props => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  )
}

export default Navigation
