const path = require("path")

/*
 * This function is executed at build time, and in this case it's going to be
 * executed when the gatsby-transformer-remark plugin creates a node on the
 * GraphQL. It can be used to extend or transform nodes created by those plugins
 */
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get Path to Template
  const blogPostTemplate = path.resolve(`src/templates/BlogPostTemplate/BlogPostTemplate.jsx`)

  // 2. Get MD Data to Create Pages
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const res = await graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `, { limit: 1000 })

  // 3. Create blog post pages.
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.fields.slug
        // Add optional context data to be inserted
        // as props into the page component.
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      }
    })
  })
}
