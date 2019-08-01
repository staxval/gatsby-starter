import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";

export const query = graphql`
  query MyQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

export const Post = ({
  data: {
    mdx: {
      frontmatter: { title, author },
      body
    }
  }
}) => {
  return (
    <Layout>
      <div
        css={css`
          margin: 2rem 0 0.5rem;
          font-size: 3.5rem;
          font-weight: 700;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          margin-bottom: 3rem;
        `}
      >
        <em>
          by
          {author}
        </em>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      }),
      body: PropTypes.string.isRequired
    })
  }).isRequired
};

export default Post;
