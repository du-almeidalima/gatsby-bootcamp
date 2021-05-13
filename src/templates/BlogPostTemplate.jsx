import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

export const query = graphql`
    query (
        $slug: String!
    ) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <small>{data.markdownRemark.frontmatter.date}</small>
      <main>
        <article dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}>
        </article>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate
