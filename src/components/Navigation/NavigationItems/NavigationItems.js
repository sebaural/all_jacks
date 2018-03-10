import React from 'react';

import './NavigationItems.css';
import NavItem from './NavItem/NavItem';

const Nav = () => (
  <ul>
    <NavItem link="/" active > HOME </NavItem>
    <NavItem link="/price" > PRICE </NavItem>
  </ul>
);

export default Nav;
