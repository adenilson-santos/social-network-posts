import React from "react";

import { PostStyle } from "./style";

const Post = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostStyle>
        <header>
          <img src={`/images/${post.author.avatar}`} alt="avatar" />
          <strong>{post.author.name}</strong>
        </header>
        <p>{post.content}</p>
      </PostStyle>
    ))}
  </div>
);

export default Post;
