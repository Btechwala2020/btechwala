import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import '../Style.css'

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div id="navbar">
        <div id="logo">
          <img src="/logo.png" alt="" />
          <h3>btech wala</h3>
        </div>

        <div id="mid">
          <div id="animid1">
            <h2>home</h2>
          </div>
          <div id="animid1">
            <h2>study material</h2>
          </div>
          <div id="animid">
            <h2>
              <li id="syla" onClick={toggleDropdown}>
                syllabus <i className="ri-arrow-down-double-line"></i>
                <ul className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
                  <li id="one">first year</li>
                  <div id="line"></div>
                  <li id="one">second year</li>
                  <div id="line"></div>
                  <li id="one">third year</li>
                  <div id="line"></div>
                  <li id="one">fourth year</li>
                </ul>
              </li>
            </h2>
          </div>
          <div id="animid1">
            <h2>notes</h2>
          </div>
          <div id="animid1">
            <h2>pyq's</h2>
          </div>
        </div>
        <div id="navbar-line"></div>

        <button id="mobile-menu-btne" onClick={toggleMobileMenu}>
          <i className="ri-menu-line"></i>
        </button>
        <div id="end">
          <Link to="/login" className="signup-button">
            <button>signup now</button>
          </Link>
          <div id="user"><i className="ri-user-line"></i></div>
        </div>
      </div>

      <div id="mobile-menu" className={isMobileMenuOpen ? 'active' : ''}>
        <div id="mobile-menu-header">
          <h3>Btech Wala</h3>
          <button id="mobile-menu-close" onClick={toggleMobileMenu}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div id="mobile-menu-items">
          {[
            { href: "https://www.btechwala.in", text: "Home" },
            { href: "https://www.btechwala.in/studymaterial_year_selection.html", text: "Study Material" },
            { href: "https://www.btechwala.in/notes_year_selection.html", text: "Notes" },
            { href: "https://www.btechwala.in/quantum_year_selection.html", text: "Quantum" },
            { href: "https://www.btechwala.in/pyq_year_selection.html", text: "PYQ's" },
            { href: "https://www.btechwala.in/imp_year_selection.html", text: "Important Topics" },
            { href: "", text: "Best YouTube Channels" }
          ].map((item, index) => (
            <a
              href={item.href}
              key={index}
              style={{ animation: `fadeInRight 0.5s ease forwards ${index * 0.1}s` }}
            >
              <i className="ri-arrow-right-up-line"></i>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav