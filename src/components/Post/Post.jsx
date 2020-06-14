import React from 'react';

const Post = ({ post, likes }) => {
  return (
    <div className="post">
      {post}
      <span>likes {likes}</span>
    </div>
  )
}

export default Post