import React from "react"
import Layout from "../../components/Layout/Layout"
import { graphql } from "gatsby"
import * as style from "./BlogPostTemplate.module.scss"

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
      <article className={style.AppPost}>
        <h1 className={style.title}>{data.markdownRemark.frontmatter.title}</h1>
        <small className={style.date}>{data.markdownRemark.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }} />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate
