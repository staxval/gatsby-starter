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
            imagePreview {
              sharp: childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(
    ({ frontmatter: { author, slug, title, imagePreview } }) => ({
      author,
      slug,
      title,
      imagePreview,
    })
  );
};

export default usePosts;
