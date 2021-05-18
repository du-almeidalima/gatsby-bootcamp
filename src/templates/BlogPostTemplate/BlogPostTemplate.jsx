import { BLOCKS } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import Layout from "../../components/Layout/Layout"
import * as style from "./BlogPostTemplate.module.scss"

// == UI Components ==
const blogImage = ({ alt, src }) => {
  return <img src={src} alt={alt}></img>
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            fluid(maxWidth: 1000) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

/*
 * Due to the Rich Text Contentful data type, I needed to install an package,
 * @contentful/rich-text-react-renderer, in order to parse the json that comes from this field
 */

const BlogPostTemplate = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        )
      },
    },
  }

  return (
    <Layout>
      <article className={style.AppPost}>
        <h1 className={style.title}>{data.contentfulBlogPost.title}</h1>
        <small className={style.date}>
          {data.contentfulBlogPost.publishedDate}
        </small>
        {(data.contentfulBlogPost.content, options)}
      </article>
    </Layout>
  )
}

export default BlogPostTemplate
