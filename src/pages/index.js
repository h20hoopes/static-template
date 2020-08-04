import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

class Index extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Layout>
          <h1>A thing</h1>
          <p>
            Don't <Link to="/contact">contact</Link> me.
          </p>
        </Layout>
      </React.Fragment>
    )
  }
}

export default Index
