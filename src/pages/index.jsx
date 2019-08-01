import React from "react";
import "normalize.css";

import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import usePosts from "../hooks/usePosts";

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      {posts.map(post => (
        <PostPreview post={post} />
      ))}
    </Layout>
  );
};
