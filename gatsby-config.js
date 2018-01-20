module.exports = {
  siteMetadata: {
    title: 'Gatsby Sandbox',
    author: 'James Shakespeare',
    description: 'Messing around with Gatsby.',
    siteUrl: 'https://js-gatsby-test.surge.sh',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet'
  ]
};
