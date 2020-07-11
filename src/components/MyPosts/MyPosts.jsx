import React from 'react';
import Post from '../Post/Post';

const MyPosts = ({ profilePage, addPost, textChange }) => {
  const postsElems = profilePage.posts.map(el => <Post key={el.id} post={el.message} likes={el.likesCount} />)
  const addPostHandle = () => addPost()
  const textChangeHandle = e => textChange(e.target.value)
  return (
    <div className="my-posts">
      <textarea onChange={textChangeHandle} value={profilePage.textarea.stateValue} />
      {/* Берем значение из textarea (newPostElem.current.value) и передаем в callback функцию, которая пришла из state.js */}
      <button onClick={addPostHandle}>Add post</button>
      {postsElems}
    </div>
  )
}

export default MyPosts