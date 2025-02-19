import React, { useState } from "react";

const availableIngredients = [
  "Tomato",
  "Cheese",
  "Basil",
  "Garlic",
  "Onion",
  "Chicken",
  "Beef",
  "Carrot",
  "Broccoli",
  "Pepper",
];

function IngredientList({ onSelectIngredients }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleCheckboxChange = (ingredient) => {
    const updatedIngredients = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter((i) => i !== ingredient)
      : [...selectedIngredients, ingredient];

    setSelectedIngredients(updatedIngredients);
    onSelectIngredients(updatedIngredients);
  };

  return (
    <div className="ingredient-list">
      <h3>Select Ingredients:</h3>
      <ul>
        {availableIngredients.map((ingredient, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={ingredient}
                checked={selectedIngredients.includes(ingredient)}
                onChange={() => handleCheckboxChange(ingredient)}
              />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
