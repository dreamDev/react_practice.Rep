import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  const path = `/messages/${id}`
  return (
    <div className="dialog">
      <NavLink to={path} className="dialog__link">{name}</NavLink>
    </div>
  )
}

export default DialogItem