import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const PostTitle = styled(Link)`
  font-size: 2rem;
  line-height: 2.2rem;
`;

const PostPreview = ({ post }) => {
  return (
    <div
      css={css`
        display: flex;
        box-shadow: 0 0 25px 5px #37358533;
        border-radius: 5px;
        margin: 2.5rem 0;
        padding: 2rem;
      `}
    >
      <Link
        to={`/${post.slug}`}
        css={css`
          width: 150px;
        `}
      >
        <Image
          fluid={post.imagePreview.sharp.fluid}
          alt={post.title}
          css={css`
            * {
              margin-top: 0;
            }
          `}
        />
      </Link>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin-left: 2rem;
        `}
      >
        <PostTitle to={`/${post.slug}`}>{post.title}</PostTitle>
        <div
          css={css`
            margin-top: 1rem;
          `}
        >
          <em>
            by
            {post.author}
          </em>
        </div>
      </div>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imagePreview: PropTypes.shape({
      sharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }).isRequired,
};

export default PostPreview;
