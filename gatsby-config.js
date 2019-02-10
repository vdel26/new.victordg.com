module.exports = {
  siteMetadata: {
    title: 'victordg.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 })
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'victordg.com',
        short_name: 'victordg.com',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
