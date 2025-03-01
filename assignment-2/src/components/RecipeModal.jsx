import React from "react";
import { Modal, Button } from "react-bootstrap";

const RecipeModal = ({ show, handleClose, recipe }) => {
  if (!recipe) return null;

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      {" "}
      <Modal.Header closeButton>
        <Modal.Title>{recipe.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          {" "}
          {/* Center the image */}
          <img
            src={recipe.image}
            className="img-fluid mb-3"
            alt={recipe.title}
          />
        </div>

        <p>
          <strong>Cooking Time:</strong>{" "}
          {recipe.readyInMinutes ? `${recipe.readyInMinutes} minutes` : "N/A"}
        </p>

        <p>
          <strong>Description:</strong>{" "}
          {recipe.summary
            ? recipe.summary.replace(/<[^>]*>/g, "")
            : "No description available."}
        </p>

        <div>
          <strong>Ingredients:</strong>
          <ul>
            {recipe.extendedIngredients ? (
              recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              ))
            ) : (
              <li>No ingredients available.</li>
            )}
          </ul>
        </div>

        <p>
          <strong>Instructions:</strong>{" "}
          {recipe.instructions
            ? recipe.instructions.replace(/<[^>]*>/g, "")
            : "No instructions available."}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipeModal;
