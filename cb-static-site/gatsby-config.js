module.exports = {
  siteMetadata: {
    title: `Circuit Breaker Countdown | Singapore`,
    siteURL: `https://circuit-breaker-countdown.web.app`,
    description: `The Circuit Breaker just got extended to 1 June 2020, so let's do our part and stay home! #SGUnited #Stayhome`,
    author: `@HJunyuan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Circuit Breaker Countdown | Singapore`,
        short_name: `Circuit Breaker Countdown`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFDC85`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
