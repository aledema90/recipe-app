const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Route to generate a recipe from selected ingredients
app.post("/api/generate-recipe", (req, res) => {
  const ingredients = req.body.ingredients;
  if (!ingredients || ingredients.length === 0) {
    return res.status(400).json({ error: "No ingredients provided" });
  }

  // Placeholder logic for generating a recipe.
  // You can replace this with a call to an AI model or a database.
  const recipe = `Here's a delicious recipe with ${ingredients.join(
    ", "
  )}. Enjoy your cooking!`;

  res.json({ recipe });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
