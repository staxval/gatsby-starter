import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

const Container = ({ children, width }) => (
  <div
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
  width: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

Container.defaultProps = {
  width: "750"
};

export default Container;
