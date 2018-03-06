import React from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
    totalPrice: 4
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
    const newPrice =  oldPrice + priceAddition;
    newPrice.toFixed(2) ;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

    console.log(priceAddition);

  };

  removeIngredientHandler = (type) => {

};

  render() {

    return (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <div className="totalPriceOfBurger"> {this.state.totalPrice} </div>
          <div> <BuildControls
            ingredientsAdded={this.addIngredientHandler}
          />
          </div>
        </Aux>
    );

  }

}

export default BurgerBuilder;
