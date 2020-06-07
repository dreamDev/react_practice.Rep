import React from 'react'
import Post from '../Post/Post'

const MyPosts = () => {
  return (
    <div className="my-posts">
      <textarea></textarea>
      <button>Add post</button>
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts