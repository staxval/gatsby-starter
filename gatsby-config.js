module.exports = {
  siteMetadata: {
    title: 'Playing Around With Gatsby',
    description: 'Whatever description',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.jsx'),
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images', options: { maxWidth: 750 } },
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }], // not supposed to be here
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
};
