import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

  const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Condiments', type: 'condiments'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
  ];

const buildControls = ( props ) => (
    <div className={classes.BuildControls}>
      <div>Current Price: {props.price.toFixed(2)}</div>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disablediabo[ctrl.type]}
        />
      ))}

      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.goAhead}
      >ORDER NOW</button>

    </div>
);

export default buildControls;
