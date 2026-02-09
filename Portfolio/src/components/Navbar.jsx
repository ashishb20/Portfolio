import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="logo">AB.</a>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contribution" className="nav-link" onClick={() => setIsOpen(false)}>Contribution</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay for better mobile styling if needed, keeping it simple for now which relies on CSS classes */}

    </nav>
  );
};

export default Navbar;
