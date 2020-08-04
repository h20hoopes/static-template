import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"

class About extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <Head title="About"/>
        This is the About page.
      </Layout>
    )
  }
}

export default About
