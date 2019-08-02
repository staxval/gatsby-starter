import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            author
            slug
            title
          }
        }
      }
    }
  `);
  return data.allMdx.nodes.map(({ frontmatter: { author, slug, title } }) => ({
    author,
    slug,
    title,
  }));
};

export default usePosts;
