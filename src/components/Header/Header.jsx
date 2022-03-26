import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Time from '../Time/Time';
import './Header.css';

const Header = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Calculator', link: 'calculator' },
    { name: 'Quotes', link: 'qoutes' },
  ];

  const openNavBar = () => {
    const navbar = document.querySelector('.header .navBar');
    const header = document.querySelector('.header > :not(.navBar)');
    const navOpen = document.querySelector('.header .navOpen');
    const w = window.innerWidth;

    if (w < 768) {
      navbar.style.display = 'block';
      header.style.display = 'none';
      navOpen.style.display = 'none';
    }
  };

  const closeNavBar = () => {
    const navbar = document.querySelector('.header .navBar');
    const header = document.querySelector('.header > :not(.navBar)');
    const navOpen = document.querySelector('.header .navOpen');
    const w = window.innerWidth;
    if (w < 768) {
      navbar.style.display = 'none';
      header.style.display = 'block';
      navOpen.style.display = 'block';
    }
  };

  document.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      const navbar = document.querySelector('.header .navBar');
      const header = document.querySelector('.header > :not(.navBar)');
      const navOpen = document.querySelector('.header .navOpen');
      navbar.style.display = 'none';
      header.style.display = 'block';
      navOpen.style.display = 'block';
    }
  });

  return (
    <div className="header">
      <h2 className="logo">Math Magician</h2>
      <nav className="navBar">
        <ul className="navList">
          {navItems.map((nav) => (
            <li className="navItem" key={nav.link}>
              <NavLink
                onClick={closeNavBar}
                to={nav.link}
                className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <FaTimes className="navClose" onClick={closeNavBar} />
      </nav>
      <Time />
      <FaBars className="navOpen" onClick={openNavBar} />
    </div>
  );
};

export default Header;
