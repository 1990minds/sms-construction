module.exports = {
  siteMetadata: {
    title: `Industrial Constructions | Commercial Constructions | Residential Constructions |`,
    description: `Sms constructions are leading Industrial & Commercial Constructions company working over 2 decades.
    Pioneers of smart constructions of Factories, Industries and Office spaces.`,
    author: `@1990minds`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
     `gatsby-transformer-json`,
     {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/gallery`,
        name: "gallery",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jsondata`,
        path: `${__dirname}/src/data`,
      },

    },  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ojsondata`,
        path: `${__dirname}/src/data`,
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-htaccess',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SMS Constructions`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
