import React from "react"
import Layout from "../../components/Layout/Layout"
import { graphql } from "gatsby"
import * as style from "./BlogPostTemplate.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <article className={style.AppPost}>
        <h1 className={style.title}>{data.contentfulBlogPost.title}</h1>
        <small className={style.date}>
          {data.contentfulBlogPost.publishedDate}
        </small>
        <div
          dangerouslySetInnerHTML={{
            __html: null,
          }}
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate
