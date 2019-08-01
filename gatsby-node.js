module.exports = {
  createPages: async ({ actions: { createPage }, graphql }) => {
    const res = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);
    res.data.allMdx.nodes.map(({ frontmatter: { slug } }) =>
      createPage({
        path: `/${slug}`,
        component: require.resolve('./src/templates/Post.jsx'),
        context: { slug },
      })
    );
  },
};
