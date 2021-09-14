import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/space-logo.png';

function Header() {
  return (
    <header className="app-header">
      <div className="app-title">
        <img className="logo" src={logo} alt="space travellers hub logo" />
        <span className="app-title">Space Traveller&apos;s Hub</span>
      </div>
      <nav className="space-nav">
        <ul className="links-nav">
          <li>
            <NavLink
              className={(isActive) => `${isActive ? '' : 'link-nav'}`}
              to="/rockets"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(isActive) => `${isActive ? '' : 'link-nav'}`}
              to="/profile"
            >
              Profile
            </NavLink>

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
