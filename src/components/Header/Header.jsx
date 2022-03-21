import React from 'react';
import { NavLink } from 'react-router-dom';
import Time from '../Time/Time';
import './Header.css';

const Header = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Calculator', link: 'calculator' },
    { name: 'Quotes', link: 'qoutes' },
  ];
  return (
    <div className="header">
      <h2 className="logo">Math Magician</h2>
      <nav className="navBar">
        <ul className="navList">
          {navItems.map((nav) => (
            <li className="navItem" key={nav.link}>
              <NavLink
                to={nav.link}
                className={({ isActive }) => (isActive ? 'navLink-active' : 'navLink')}
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Time />
    </div>
  );
};

export default Header;
