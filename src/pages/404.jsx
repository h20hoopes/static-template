import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
        <Head title="404"/>
      <h1>Page not found</h1>
      <p>This page is not found</p>
      <Link to="/">
        <p>Go home</p>
      </Link>
    </Layout>
  )
}

export default NotFound
