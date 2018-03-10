import React from 'react';

import classes from './Toolbar.css';
import logo from '../../../logo.svg';
import Nav from '../NavigationItems/NavigationItems';

const Toolbar = ( props ) => {
  return (
    <header className={classes.Toolbar}>

      <div className={classes.App_header}>
        <div className={classes.logo_holder}>
          <img src={logo} className={classes.App_logo} alt="logo"/>
        </div>
        <h2>Build React Burger</h2>
      </div>
      
      <nav>
        <Nav/>
      </nav>

    </header>
  );
};

export default Toolbar;
