import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Post from "../components/Post/Post"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="AppPageTitle">Welcome to an amazing Blog!</h1>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <Post
          key={node.title}
          title={node.title}
          date={node.publishedDate}
          excerpt={null}
          slug={node.slug}
        />
      ))}
    </Layout>
  )
}

export default BlogPage
