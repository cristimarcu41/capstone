import React, { useState } from 'react'
import logo from '../Logo.svg'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Little Lemon Restaurant Logo" />
        <span className="navbar-brand">LITTLE LEMON</span>
      </div>
      <button
        className="navbar-hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={handleMenuToggle}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <nav
        id="navbar-menu"
        className={`navbar-menu${menuOpen ? ' open' : ''}`}
        aria-label="Main navigation"
      >
        <a href="/" onClick={handleLinkClick}>HOME</a>
        <a href="/about" onClick={handleLinkClick}>ABOUT</a>
        <a href="/menu" onClick={handleLinkClick}>MENU</a>
        <a href="/reservations" onClick={handleLinkClick}>RESERVATIONS</a>
        <a href="/order" onClick={handleLinkClick}>ORDER ONLINE</a>
        <a href="/login" onClick={handleLinkClick}>LOGIN</a>
      </nav>
    </header>
  );
}


