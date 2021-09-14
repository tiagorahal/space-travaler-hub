import React from 'react';
import logo from '../../assets/space-logo.png';

function Header() {
  return (
    <header className="app-header">
      <div className="app-title">
        <img className="logo" src={logo} alt="space travellers hub logo" />
        <span className="title">Space Traveller&apos;s Hub</span>
      </div>
      <nav className="app-nav" />
    </header>
  );
}

export default Header;