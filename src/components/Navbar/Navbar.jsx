import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <NavLink to="/profile" activeClassName='active-navLink' className="navbar__list-link">
            Profile
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink to="/messages" activeClassName='active-navLink' className="navbar__list-link">
            Messages
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink to="/news" activeClassName='active-navLink' className="navbar__list-link">
            News
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink to="/music" activeClassName='active-navLink' className="navbar__list-link">
            Music
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink to="/settings" activeClassName='active-navLink' className="navbar__list-link">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar