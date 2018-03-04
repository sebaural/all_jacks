import React from 'react';
import Aux from '../../hoc/Aux';
import logo from '../../logo.svg';

import layoutClasses from './Layout.css';

const layout = ( props ) => (

  <Aux>
    <div>TOOLBAR, SIDE_DRAWER, BACKDROP</div>
    <div className={layoutClasses.App_header}>
      <div className={layoutClasses.logo_holder}>
        <img src={logo} className={layoutClasses.App_logo} alt="logo"/>
      </div>
      <h2>Build React Burger</h2>
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
