import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"

export const query = graphql`
  query {
    dataJson(products: { elemMatch: { title: { eq: "cookies" } } }) {
      products {
        name
      }
    }
  }
`

const ProductPage = props => {
  return (
    <Layout>
      <Head title={props.data.dataJson.products.title} />
      <h1>{props.data.dataJson.products.name}</h1>
      <p>`$ $({props.data.dataJson.products.price})</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default ProductPage
