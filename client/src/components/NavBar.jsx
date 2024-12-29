import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My App</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/addresses">Addresses</a></li>
        <li><a href="/favorites">Favorites</a></li>
      </ul>
      <div className="navbar-user">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;