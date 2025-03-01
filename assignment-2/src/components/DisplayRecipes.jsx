import React, { useState } from "react";
import RecipeModal from "./RecipeModal";

const DisplayRecipes = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };

  const handleShowModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h3>Recipes</h3>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div
              className="card h-100 d-flex flex-column"
              onClick={() => handleShowModal(recipe)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.title}
              />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  Cooking Time:{" "}
                  {recipe.readyInMinutes
                    ? `${recipe.readyInMinutes} minutes`
                    : "N/A"}
                </p>
                <p className="card-text flex-grow-1">
                  {recipe.summary ? (
                    <span
                      className="preview"
                      title={recipe.summary.replace(/<[^>]*>/g, "")}
                    >
                      {truncateText(
                        recipe.summary.replace(/<[^>]*>/g, ""),
                        150
                      )}
                    </span>
                  ) : (
                    "No description available."
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <RecipeModal
        show={showModal}
        handleClose={handleCloseModal}
        recipe={selectedRecipe}
      />
    </div>
  );
};

export default DisplayRecipes;
