import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

class Modal extends React.Component {


  // make sure the updates to order summary run only once if Modal is open, i.e. when "this.props.show" is true
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} bg_clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
            opacity: this.props.show ? '0.9' : '0'
          }}
          className={classes.Modal}>
          {this.props.children}
        </div>
      </Aux>
    );
  };

}

export default Modal;
