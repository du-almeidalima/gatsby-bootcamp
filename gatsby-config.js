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
  ],
  siteMetadata: {
    author: 'Eduardo Lima',
    github: 'https://github.com/du-almeidalima',
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
