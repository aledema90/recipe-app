const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Your Spoonacular API Key
const SPOONACULAR_API_KEY = "5b300e7bede14f6baece74b6e541f444";

const baseURL = "https://api.spoonacular.com/recipes/findByIngredients";

// Construct the URL with query parameters
const apiUrl = baseURL + "?apiKey=" + SPOONACULAR_API_KEY;

console.log(apiUrl); // Output the constructed URL

// Endpoint to generate recipe
app.post("/api/generate-recipe", async (req, res) => {
  const { ingredients } = req.body;

  console.log("Received ingredients:", ingredients);

  try {
    // Construct the ingredients string for the API query
    const ingredientsList = ingredients.join(",");
    console.log("Formatted ingredients for API:", ingredientsList);

    // Call the Spoonacular API
    const response = await axios.get(apiUrl, {
      params: {
        ingredients: ingredientsList,
        number: 2, // Number of recipes you'd like to fetch
        //apiKey: SPOONACULAR_API_KEY,
      },
    });

    console.log("API response status:", response.status);
    console.log("API response data:", response.data);

    res.json(response.data); // Send the recipe data back to the client
  } catch (error) {
    console.error("Spoonacular API Error:", error.message);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
