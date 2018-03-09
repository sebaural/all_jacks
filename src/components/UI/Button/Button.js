import React from 'react';

import classes from './Button.css';

const orderButton = ( props ) => (
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(' ')} >
    {props.children}
  </button>
);

export default orderButton;
