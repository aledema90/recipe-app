import React, { useState } from "react"; // Import React and useState for component state management
import RecipeDisplay from "./components/RecipeDisplay"; // Import the RecipeDisplay component
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./styles/App.css"; // Import global styles

// Define available ingredients
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

function App() {
  // State to store selected ingredients
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  // State to store the generated recipe string
  const [recipe, setRecipe] = useState(null);

  // Function to handle dropdown change for ingredient selection
  const handleSelectChange = (event) => {
    const ingredient = event.target.value;
    if (ingredient && !selectedIngredients.includes(ingredient)) {
      const updatedIngredients = [...selectedIngredients, ingredient];
      setSelectedIngredients(updatedIngredients);
    }
  };

  // Function to handle ingredient removal
  const handleRemoveIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (i) => i !== ingredient
    );
    setSelectedIngredients(updatedIngredients);
  };

  // Function to send selected ingredients to the backend for recipe generation
  const handleGenerateRecipe = async () => {
    if (selectedIngredients.length === 0) {
      alert("Please select at least one ingredient.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/generate-recipe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ingredients: selectedIngredients }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate recipe");
      }

      const data = await response.json();
      setRecipe(data.recipe);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component to display site navigation */}
      <header className="App-header">
        <h1>Recipe Finder</h1> {/* Application Title */}
        <div className="ingredient-selection">
          {/* Dropdown for selecting ingredients */}
          <select
            onChange={handleSelectChange}
            className="ingredient-dropdown"
            defaultValue=""
          >
            <option value="" disabled>
              Select ingredients
            </option>
            {availableIngredients.map((ingredient, index) => (
              <option key={index} value={ingredient}>
                {ingredient}
              </option>
            ))}
          </select>
          {/* Display selected ingredients as tags */}
          <div className="selected-ingredients">
            {selectedIngredients.map((ingredient, index) => (
              <div key={index} className="ingredient-tag">
                {ingredient}
                <button
                  className="remove-button"
                  onClick={() => handleRemoveIngredient(ingredient)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Generate Recipe Button */}
        <button onClick={handleGenerateRecipe} className="generate-button">
          Generate Recipe
        </button>
        {/* Conditionally render the RecipeDisplay component to show the generated recipe */}
        {recipe && <RecipeDisplay recipe={recipe} />}
      </header>
    </div>
  );
}

export default App; // Export the App component for rendering in the main application
