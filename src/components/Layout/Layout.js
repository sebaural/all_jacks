import React from 'react';
import Aux from '../../hoc/Aux';
import logo from '../../logo.svg';

import './Layout.css';

const layout = ( props ) => (

  <Aux>
    <div>TOOLBAR, SIDE_DRAWER, BACKDROP</div>
    <div className="App-header">
      <div className="logo_holder">
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <h2>Build React Burger</h2>
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
