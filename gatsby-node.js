const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/BlogPostTemplate/BlogPostTemplate.jsx')
  const res = await graphql(
    `
      query {
        allContentfulBlogPost {
          nodes {
            slug
          }
        }
      }
    `,
    { limit: 1000 }
  )

  // 3. Create blog post pages.
  res.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      // Path for this page — required
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
        // Add optional context data to be inserted
        // as props into the page component.
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}
