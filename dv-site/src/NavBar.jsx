import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <CustomLink to="/" exact onClick={toggleMenu}>
              Home
            </CustomLink>
            <CustomLink to="/visualize" onClick={toggleMenu}>
              Visualize
            </CustomLink>
            <CustomLink to="/labs" onClick={toggleMenu} hasDropdown>
              The Lab
            </CustomLink>
            <CustomLink to="/about" onClick={toggleMenu}>
              Contact
            </CustomLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, hasDropdown, external, ...props }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  if (hasDropdown) {
    return (
      <li className={`nav-item has-dropdown`}>
        <div className="nav-link" onClick={toggleDropdown}>
          {children}
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <a
              href="https://millerlab.createuky.net/our-team/" // External link URL
              className="dropdown-item"
              onClick={closeDropdown}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for external links
            >
              Miller Lab
            </a>
            <a
              href="http://selenicalab.createuky.net/" // External link URL
              className="dropdown-item"
              onClick={closeDropdown}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for external links
            >
              Selenica Lab
            </a>
          </div>
        )}
      </li>
    );
  } else {
    if (external) {
      return (
        <li className="nav-item">
          <a
            href={to}
            {...props}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <NavLink to={to} {...props} className="nav-link">
            {children}
          </NavLink>
        </li>
      );
    }
  }
}
