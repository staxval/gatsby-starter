import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Container = ({ children, width, className }) => (
  <div
    className={className}
    css={css`
      padding: 0 calc((100vw - ${width}px) / 2);
    `}
  >
    <div
      css={css`
        max-width: ${width}px;
      `}
    >
      {children}
    </div>
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

Container.defaultProps = {
  className: undefined,
  width: '750',
};

export default Container;
