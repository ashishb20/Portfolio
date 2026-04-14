import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    const links = [
        { href: '#hero', label: 'Home' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#contribution', label: 'Activity' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="#" className="logo">AB.</a>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {links.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="nav-link" onClick={close}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
