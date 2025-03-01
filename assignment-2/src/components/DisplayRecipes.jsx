import React, { useState } from "react";
import Select from "react-select";
import RecipeModal from "./RecipeModal";

const DisplayRecipes = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

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

  const handleDietaryChange = (selectedOptions) => {
    setDietaryRestrictions(selectedOptions.map((option) => option.value));
    //console.log("Selected dietary restrictions:", selectedValues);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (dietaryRestrictions.length === 0) return true;
    return dietaryRestrictions.every((restriction) => recipe[restriction]);
  });

  const dietaryOptions = [
    { value: "dairyFree", label: "Dairy Free" },
    { value: "glutenFree", label: "Gluten Free" },
    { value: "keto", label: "Keto" },
    { value: "lowFodmap", label: "Low Fodmap" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
  ];

  return (
    <div className="container mt-4">
      <h3>Recipes</h3>
      <div className="mb-3">
        <label className="form-label">Dietary Restrictions:</label>
        <Select
          isMulti
          options={dietaryOptions}
          onChange={handleDietaryChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div className="row">
        {filteredRecipes.map((recipe) => (
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
