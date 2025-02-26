// RecipeDisplay.js
import React from "react";

const RecipeDisplay = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <p>No recipes found</p>;
  }

  return (
    <div className="recipe-display">
      {recipes.map((recipe, index) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3> {/* Recipe Title */}
          <img src={recipe.image} alt={recipe.title} /> {/* Recipe Image */}
          <h4>Ingredients Used</h4>
          <ul>
            {recipe.usedIngredients.map((ingredient, i) => (
              <li key={i}>
                {ingredient.original}
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  style={{ width: "50px" }}
                />
              </li>
            ))}
          </ul>
          <h4>Ingredients Missed</h4>
          <ul>
            {recipe.missedIngredients.map((ingredient, i) => (
              <li key={i}>
                {ingredient.original}
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  style={{ width: "50px" }}
                />
              </li>
            ))}
          </ul>
          <p>Likes: {recipe.likes}</p> {/* Number of likes */}
        </div>
      ))}
    </div>
  );
};

export default RecipeDisplay;
