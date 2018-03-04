import React from 'react';
import Aux from '../../hoc/Aux';

import layoutClasses from './Layout.css';

const layout = ( props ) => (

  <Aux>
    <div>TOOLBAR, SIDE_DRAWER, BACKDROP</div>

    <main className={layoutClasses}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
