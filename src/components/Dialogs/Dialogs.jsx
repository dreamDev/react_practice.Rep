import React from 'react';
import { NavLink } from 'react-router-dom';
import { textareaMessageChangeAC, sendMessageAC } from '../../redux/state';

const DialogItem = ({ name, id }) => {
  const path = `/messages/${id}`
  return (
    <div className="dialog">
      <NavLink to={path} className="dialog__link">{name}</NavLink>
    </div>
  )
}

const Message = ({ message }) => {
  return (
    <div className="message">
      {message}
    </div>
  )
}

const Dialogs = ({ dialogsPage, dispatch }) => {
  const dialogsElems = dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
  const messagesElems = dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)
  const newMessageElem = React.createRef()
  const sendMessageHandler = () => dispatch(textareaMessageChangeAC(newMessageElem.current.value))
  const sendBtnHandler = () => dispatch(sendMessageAC(newMessageElem.current.value))
  return (
    <div className="dialogs">
      <div className="dialogs__holder">
        <div className="dialogs__inner">
          {dialogsElems}
        </div>
      </div>
      <div className="dialogs__messages">
        {messagesElems}
        <textarea ref={newMessageElem} value={dialogsPage.textarea.stateValue} onChange={sendMessageHandler}/>
        <button onClick={sendBtnHandler}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs