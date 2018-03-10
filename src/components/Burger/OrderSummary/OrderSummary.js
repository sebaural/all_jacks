import React from 'react';
import Aux from '../../../hoc/Aux';

import orderClass from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
      );
    });

  return (
          <Aux>
            <h4>Your Order</h4>
            <hr/>
            <h5>Your burger has following ingredients:</h5>
            <ul>
            {ingredientSummary}
            </ul>
            <p><strong>Order Total:  {props.totalPrice.toFixed(2)}</strong></p>
            <div className={orderClass.btnContainer}>
              <p>Continue to Order</p>
              <div>
              <Button btnType="Danger" clicked={props.purchaseCancelled} > Cancel </Button>
              <Button btnType="Success" clicked={props.continuePurchase} > Continue </Button>
              </div>
            </div>
          </Aux>
  );
};

export default orderSummary;
