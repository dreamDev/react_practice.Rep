import React from 'react';
import logo from '../../social-logo.png'

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img className="header__logo" src={logo} alt=""/>
      </a>
    </header>
  )
}

export default Header