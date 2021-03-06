import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';

const layout = ( props ) => (
  <Aux>
    <Toolbar/>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
