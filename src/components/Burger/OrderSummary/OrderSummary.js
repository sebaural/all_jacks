import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
      );
    });

  console.log(ingredientSummary);

  return (
    <Aux>
      <h3>Your Order</h3>
      <hr/>
      <h4>Your burger has following ingredients:</h4>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Order</p>
    </Aux>
  );
};

export default orderSummary;
