import React from 'react'
import Post from '../Post/Post'
import { addPostAC, textareaPostChangeAC } from '../../redux/state'

const MyPosts = ({ profilePage, dispatch }) => {
  const postsElems = profilePage.posts.map(el => <Post key={el.id} post={el.message} likes={el.likesCount} />)
  // Создаем ссылку
  const newPostElem = React.createRef()
  const addPostHandle = () => dispatch(addPostAC(newPostElem.current.value))
  const textChangeHandle = () => dispatch(textareaPostChangeAC(newPostElem.current.value))
  return (
    <div className="my-posts">
      {/* Привязываем нашу ссылку к элементу, что бы к нему обратиться в обработчике */}
      <textarea ref={newPostElem} onChange={textChangeHandle} value={profilePage.textarea.stateValue} />
      {/* Берем значение из textarea (newPostElem.current.value) и передаем в callback функцию, которая пришла из state.js */}
      <button onClick={addPostHandle}>Add post</button>
      {postsElems}
    </div>
  )
}

export default MyPosts