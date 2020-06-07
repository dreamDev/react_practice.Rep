import React from 'react';
import { Link } from 'react-router-dom';

const Dialogs = props => {
  return (
    <div className="dialogs">
      <div className="dialogs__holder">
          <div className="dialog">
            <Link to='/messages/1' className="dialog__link">Sveta</Link>
            <Link to='/messages/2' className="dialog__link">Dima</Link>
            <Link to='/messages/3' className="dialog__link">Alexey</Link>
            <Link to='/messages/4' className="dialog__link">Natalia</Link>
          </div>
      </div>
      <div className="dialogs__messages">
        <div className="message">
            hello
        </div>
      </div>
    </div>
  )
}

export default Dialogs