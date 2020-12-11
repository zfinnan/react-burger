import React, { useState } from 'react';
import Ingredient from './Ingredient'

function IngredientsPane(props) {
  const availableIngredients = ['bun','meat','lettuce','cheese']
  const ingredientButtons = availableIngredients.map((ingredient, index) => {
    return (
    <Ingredient 
      name={ingredient} 
      addLayer={props.addLayer}
      />
    )
  })
  return(
    <div className="pane">
        {ingredientButtons}
    </div>
)
}

export default IngredientsPane