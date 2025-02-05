import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/Layout.css';

export default function Layout() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="layout-container">
      {/* Hamburger Button */}
      <div className="menu-button" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Menu */}
      <nav className={menuActive ? "active" : ""}>
      <br></br>
      <br></br>
        <h1 className="title">José Lozano</h1>
        <img src="../assets/OwnLogo.png" alt="Logo" className="logo" />
        <Link to="/">Home</Link> <br></br> <Link to="/about">About</Link> <br></br>
        <Link to="/services">Services</Link> <br></br>
        <Link to="/project">Project</Link> <br></br> <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
