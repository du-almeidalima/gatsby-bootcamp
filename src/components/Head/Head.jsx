import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({pageTitle}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <Helmet title={pageTitle ? pageTitle + ' | ' + siteTitle : siteTitle}/>
  )
}

export default Head