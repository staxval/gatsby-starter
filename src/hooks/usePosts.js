import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childMdx {
            frontmatter {
              author
              slug
              title
            }
          }
        }
      }
    }
  `);
  return data.allFile.nodes.map(
    ({
      childMdx: {
        frontmatter: { author, slug, title }
      }
    }) => ({ author, slug, title })
  );
};

export default usePosts;
