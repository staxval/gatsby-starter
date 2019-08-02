import React from 'react';
import 'normalize.css';

import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import Greeting from '../components/Greeting';
import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Greeting />
      <Layout>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
