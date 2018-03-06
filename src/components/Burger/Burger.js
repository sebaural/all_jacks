import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = ( props ) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return  <BurgerIngredient key={igKey + '_' + i} type={igKey} />;
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <div className={classes.add_stuff}><i className="fas fa-plus"></i><i className="fas fa-utensils"></i> Start adding ingredients right NOW ! </div>
    }

  return (
    <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
            {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
