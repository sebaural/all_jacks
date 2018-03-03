import React from 'react';

import Aux from '../../hoc/Aux';

const layout = ( props ) => (

  <Aux>
    <div>TOOLBAR, SIDE_DRAWER, BACKDROP</div>

    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
