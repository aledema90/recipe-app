import React, { useState } from "react"; // Import React and the useState hook for state management
import IngredientList from "./components/IngredientList"; // Import the IngredientList component
import RecipeDisplay from "./components/RecipeDisplay"; // Import the RecipeDisplay component
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./styles/App.css"; // Import the CSS styling

function App() {
  // State to store the generated recipe string
  const [recipe, setRecipe] = useState(null);

  // Function to handle when ingredients are selected
  // Receives an array of selected ingredients as a parameter
  const handleIngredientSelection = (ingredients) => {
    // Normally, you would call your backend API to get the recipe
    // For now, we'll mock this by setting a string with the selected ingredients
    setRecipe(`Your recipe with ${ingredients.join(", ")}`);
  };

  return (
    // Main application component
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      <header className="App-header">
        <h1>Recipe Finder</h1> {/* Main application title */}
        <IngredientList onSelectIngredients={handleIngredientSelection} />{" "}
        {/* Render the IngredientList component with the callback to handle ingredient selection */}
        {recipe && <RecipeDisplay recipe={recipe} />}{" "}
        {/* Conditionally render the RecipeDisplay component if a recipe is set */}
      </header>
    </div>
  );
}

export default App; // Export the App component as the default export
