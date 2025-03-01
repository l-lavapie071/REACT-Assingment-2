import React, { useState } from "react";
import { fetchRecipes, fetchRecipeInforBulk } from "../assets/api";
import Alert from "./Alert";
import "bootstrap/dist/css/bootstrap.min.css";

const TextBox = ({ setRecipes }) => {
  const [tempText, setTempText] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setTempText(e.target.value);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const recipes = await fetchRecipes(
        tempText,
        "dc3bc76ba91241f18133f4b303f06e9d"
        /* "67a057f0478d4c5b8b732c3c5a627c6a" */
        /* "9b9c0990e00a40ada689ce119eea8386" */
      );

      if (recipes.length === 0) {
        setError("No recipes found. Please try different ingredients.");
        setLoading(false);
        return;
      }

      // Extract the IDs from the recipes
      const recipeIds = recipes.map((recipe) => recipe.id).join(",");

      // Fetch detailed information for each recipe
      const detailedRecipes = await fetchRecipeInforBulk(
        recipeIds,
        "dc3bc76ba91241f18133f4b303f06e9d"
        /* "67a057f0478d4c5b8b732c3c5a627c6a" */
        /* "9b9c0990e00a40ada689ce119eea8386" */
      );

      // Pass the detailed recipes to setRecipes
      setRecipes(detailedRecipes);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
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
      {/* for overlay while loading */}
      {loading && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextBox;
