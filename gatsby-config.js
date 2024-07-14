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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
