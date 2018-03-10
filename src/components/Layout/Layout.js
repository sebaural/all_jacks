import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';

/*import logo from '../../logo.svg';*/


const layout = ( props ) => (

  <Aux>
{/*
      <div className={layoutClasses.App_header}>
        <div className={layoutClasses.logo_holder}>
          <img src={logo} className={layoutClasses.App_logo} alt="logo"/>
        </div>
        <h2>Build React Burger</h2>
    </div>
*/}

    <Toolbar/>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
