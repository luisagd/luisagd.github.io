/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {},
  siteMetadata: {
    siteUrl: `https://luisagd.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
