import React from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  condiments: 0.2,
  bacon: 0.7,
  meat: 1.4
};

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      condiments: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    goAheadWithPurchase: false
  };

  updatePurchaseState = (ingredients) => {
/*
    const ingredients = {
      ...this.state.ingredients
    };
*/
    // make a copy of state to keep it immutable
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((accum, el) => {
        return accum + el;
      }, 0);
      this.setState({purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    // make a copy of state to keep it immutable
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    // make a copy of state to keep it immutable
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({goAheadWithPurchase: true});
    console.log(this.state);
  };

  render() {

    const disabledInfo = {
      ...this.state.ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

    return (
      <Aux>
        <Modal show={this.state.goAheadWithPurchase}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <div>
          <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disablediabo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          goAhead={this.purchaseHandler}
        />
        </div>
      </Aux>
    );

  }

}

export default BurgerBuilder;
