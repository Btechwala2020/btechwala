import React, { useState } from 'react'
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
          <h3>
            btech wala
          </h3>

        </div>

        <div id="mid">
          <div id="animid1">
            <a href="www.btechwala.in">
              <h2 >
                home
              </h2>
            </a>

          </div>
          <div id="animid1">
            <a href="www.btechwala.in/studymaterial_year_selection.html">
              <h2>study material </h2>
            </a>

          </div>
          <div id="animid">
            <h2>
              <li id="syla" onClick={toggleDropdown}>
                syllabus <i className="ri-arrow-down-double-line"></i>
                <ul className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
                  <a href="https://drive.google.com/file/d/1BnA9G05Wm6J1VMPFy6NX0T13RZfTNbVv/view?usp=drive_link">
                    <li id="one">first year</li>
                  </a>
                  <div id="line"></div>
                  <a href="https://drive.google.com/file/d/1_YDwgyweXD7za8X-8ZyZ_6nQX4A4EUSz/view?usp=drive_link">
                    <li id="one">second year</li>
                  </a>
                  <div id="line"></div>
                  <a href="https://drive.google.com/file/d/1vGU6VDl-r7k_Bsoi6yE9eVU0HyL0lB0x/view?usp=drive_link">
                    <li id="one">third year</li>
                  </a>
                  <div id="line"></div>
                  <a href="https://drive.google.com/file/d/1fHGTtAdhUkLAHOk-TKfYh_lQDYVlM-U0/view?usp=drive_link">
                    <li id="one">fourth year</li>
                  </a>
                </ul>
              </li>
            </h2>
          </div>
          <div id="animid1">
            <a href="www.btechwala.in/notes_year_selection.html">
              <h2>notes</h2>
            </a>

          </div>

          <div id="animid1">
            <a href="www.btechwala.in/pyq_year_selection.html">
              <h2>pyq's</h2>
            </a>

          </div>





        </div>
        <div id="navbar-line"></div>

        <button id="mobile-menu-btne" onClick={toggleMobileMenu}>
          <i className="ri-menu-line"></i>
        </button>
        <div id="end">
          <button><a href=""> signup now</a></button>
          <div id="user"><i class="ri-user-line"></i></div>
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