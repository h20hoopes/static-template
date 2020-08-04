import React, { Component } from "react"
import { Link } from "gatsby"
import tree from "../content/images/tree.jpg"

const Logo = props => {
  return (
    <div
      className="w3-row w3-padding-16 w3-hide-small w3-white one-edge-shadow"
      style={{ zIndex: 2 }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Link to="/">
          <img
            className="w3-image"
            style={{
              margin: "auto",
              maxHeight: 200,
              display: "block",
              overflow: "hidden",
              flexShrink: 0,
            }}
            src={tree}
          />
        </Link>
      </div>
    </div>
  )
}

export default Logo
