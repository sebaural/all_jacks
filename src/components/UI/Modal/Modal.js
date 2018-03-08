import React from 'react';

import classes from './Modal.css';

const modal = ( props ) => {
  return (
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
        opacity: props.show ? '0.9' : '0'
      }}
      className={classes.Modal}>
      {props.children}
  </div>
  );
};

export default modal;
