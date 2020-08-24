const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogTemplate.jsx")
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("./src/templates/productTemplate.jsx")
  const response = await graphql(`
    query {
      allDataJson {
        nodes {
          products {
            name
          }
        }
      }
    }
  `)

  response.data.allDataJson.edges.node.products.forEach(product => {
    createPage({
      component: productTemplate,
      path: `/store/${product.title}`,
      context: {
        slug: products.title,
      },
    })
    console.log(edge.node.products)
  })
}
