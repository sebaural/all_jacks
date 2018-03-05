import React from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      condiments: 1,
      meat: 1
    }
  };

  render() {

    return (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <div>Build Controls</div>
        </Aux>
    );

  }

}

export default BurgerBuilder;
