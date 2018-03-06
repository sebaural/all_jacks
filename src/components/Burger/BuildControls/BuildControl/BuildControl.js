import React from 'react';

import classes from './BuildControl.css';

const buildControl = ( props ) => {
  return <div className={classes.BuildControl}>
      <div className={classes.Label}> {props.label} </div>
        <button className={classes.Less}><i className="far fa-minus-square"></i><span>  </span>Less</button>
        <button className={classes.More}><i className="fas fa-plus"></i><span>  </span>  More</button>
  </div>
};

export default buildControl;
