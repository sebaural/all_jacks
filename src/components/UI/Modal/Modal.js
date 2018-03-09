import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

const modal = ( props ) => {
  return (
    <Aux>
      <Backdrop show={props.show} bg_clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-150vh)',
          opacity: props.show ? '0.9' : '0'
        }}
        className={classes.Modal}>
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
