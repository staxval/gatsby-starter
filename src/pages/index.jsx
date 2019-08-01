import React from "react";
import "normalize.css";

import Layout from "../components/Layout";
import usePosts from "../hooks/usePosts";

export default () => {
  console.log("posts:", usePosts());
  return (
    <Layout>
      <h1>And</h1>
      <h3>Here we go!</h3>
    </Layout>
  );
};
