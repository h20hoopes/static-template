import React, { Component } from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <footer>
        <p className="text-info">
          Created by {data.site.siteMetadata.author} © 2020
        </p>
      </footer>
    )
  }


export default Footer
