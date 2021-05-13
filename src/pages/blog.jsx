import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Post from "../components/Post/Post"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query PostMarkdownQuery {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                          date
                      }
                      fields {
                          slug
                      }
                      excerpt
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <h1>Welcome to an amazing Blog!</h1>
      <div style={{ height: "50px" }} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.title}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              slug={node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default BlogPage