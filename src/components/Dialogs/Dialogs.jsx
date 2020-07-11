import React from 'react';
import Message from '../Message/Message';
import DialogItem from '../DialogItem/DialogItem';

const Dialogs = ({ dialogsPage, changeMessage, btnSendClick  }) => {
  const dialogsElems = dialogsPage.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
  const messagesElems = dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)
  const changeMessageHandler = e => changeMessage(e.target.value)
  const sendBtnHandler = () => btnSendClick()
  return (
    <div className="dialogs">
      <div className="dialogs__holder">
        <div className="dialogs__inner">
          {dialogsElems}
        </div>
      </div>
      <div className="dialogs__messages">
        {messagesElems}
        <textarea value={dialogsPage.textarea.stateValue} onChange={changeMessageHandler}/>
        <button onClick={sendBtnHandler}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs