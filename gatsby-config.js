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
