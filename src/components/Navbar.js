// Navbar.js
import React from 'react';
import logoImg from './logo.png'; // Import the logo image
import './Navbar.css'; // Import CSS file for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImg} alt="Logo" className="logo" />
      </div>
      <div className="title-container">
        <div className="navbar-brand">𝓗𝓸𝓶𝓮 𝓸𝓯 𝓒𝓪𝓴𝓮𝓼</div>
       
      </div>
    </nav>
  );
};

export default Navbar;
