import React, { useState } from "react";
import { fetchRecipes, fetchRecipeInforBulk } from "../assets/api";
import Alert from "./Alert";

const TextBox = ({ setRecipes }) => {
  const [tempText, setTempText] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setTempText(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const recipes = await fetchRecipes(
        tempText,
        /* "67a057f0478d4c5b8b732c3c5a627c6a" */
        "9b9c0990e00a40ada689ce119eea8386"
      );

      if (recipes.length === 0) {
        setError("No recipes found. Please try different ingredients.");
        return;
      }

      // Extract the IDs from the recipes
      const recipeIds = recipes.map((recipe) => recipe.id).join(",");

      // Fetch detailed information for each recipe
      const detailedRecipes = await fetchRecipeInforBulk(
        recipeIds,
        /* "67a057f0478d4c5b8b732c3c5a627c6a" */
        "9b9c0990e00a40ada689ce119eea8386"
      );

      // Pass the detailed recipes to setRecipes
      setRecipes(detailedRecipes);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter ingredients separated by commas"
          aria-label="Enter ingredients separated by commas"
          aria-describedby="basic-addon2"
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleButtonClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
