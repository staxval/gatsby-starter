import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import "normalize.css";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        html {
          font-size: 10px;
        }
        body {
          font-size: 1.6rem;
        }
        a {
          color: #373585;
          font-weight: 700;
          text-decoration: none;
        }
      `}
    />
    <Helmet>
      <html lang="en" />
      <title>Gatsby sandbox</title>
      <meta name="description" content="Playing around with gatsby" />
    </Helmet>
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Layout;
