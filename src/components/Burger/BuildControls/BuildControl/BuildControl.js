import React from 'react';

import classes from './BuildControl.css';

const buildControl = ( props ) => {
  return <div className={classes.BuildControl}>
      <div className={classes.Label}> {props.label} </div>
        <button
          className={classes.Less}
          onClick={props.removed}
          disabled={props.disabled}
        ><i className="far fa-minus-square"></i><span>  </span>Less</button>
        <button className={classes.More} onClick={props.added} ><i className="fas fa-plus"></i><span>  </span>  More</button>
  </div>
};

export default buildControl;
