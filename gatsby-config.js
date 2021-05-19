/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/static/resources`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				environment: process.env.CONTENTFUL_ENVIRONMENT
      }
    }
  ],
  siteMetadata: {
    author: 'Eduardo Lima',
    github: 'https://github.com/du-almeidalima',
    title: `Duardos's Gatsby Blog`,
    menuLinks: [
      {
        "name": "Eduardo Gatsby Bootcamp",
        "link": "/"
      },
      {
        "name": "Blog",
        "link": "/blog"
      },
      {
        "name": "Contact",
        "link": "/contact"
      },
      {
        "name": "About",
        "link": "/about"
      }
    ]
  }
}
