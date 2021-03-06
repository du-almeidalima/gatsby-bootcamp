import { BLOCKS } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import Layout from "../../components/Layout/Layout"
import Head from "../../components/Head/Head"
import * as style from "./BlogPostTemplate.module.scss"
import { PostReferences } from "../../components/PostReferences/PostReferences"

// == UI Components ==
const BlogImage = ({ alt, src }) => {
  return <img src={src} alt={alt} />
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      postsReferences {
        blogPosts {
          slug
          title
        }
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
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
 * @contentful/rich-text-react-renderer and gatsby-source-contentful/rich-text
 * in order to parse the json that comes from this field.
 *
 * Huge note on "__typename" from content.references! Without the "__typename"
 * nothing goes to "node" when rendering an Image
 */

const BlogPostTemplate = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const {
          title,
          fluid: { src },
        } = node.data.target
        return <BlogImage alt={title} src={src} />
      },
    },
  }

  const postReferences = posts => {
    if (!posts || posts.length === 0) return
    console.log(posts)
    return (
      <section className={style.PostReferencesContainer}>
        <h2>Read Also: </h2>
        {posts.map(({ slug, title }) => (
          <PostReferences slug={slug} title={title} />
        ))}
      </section>
    )
  }

  return (
    <Layout>
      <Head pageTitle={data.contentfulBlogPost.title} />
      <article className={style.AppPost}>
        <h1 className={style.title}>{data.contentfulBlogPost.title}</h1>
        <small className={style.date}>
          {data.contentfulBlogPost.publishedDate}
        </small>
        {renderRichText(data.contentfulBlogPost.content, options)}
        <div className={style.PostReferencesContainer}>
          {postReferences(data.contentfulBlogPost?.postsReferences?.blogPosts)}
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate
