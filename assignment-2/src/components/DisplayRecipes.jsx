import React from "react";

const DisplayRecipes = ({ recipes }) => {
  console.log(recipes[0].diet + "<<<<<<<");
  return (
    <div className="container mt-4">
      <h3>Recipes</h3>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.title}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  Cooking Time:{" "}
                  {recipe.maxReadyTime
                    ? `${recipe.maxReadyTime} minutes`
                    : "N/A"}
                </p>
                <p className="card-text">
                  {recipe.summary
                    ? recipe.summary
                    : "No description available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayRecipes;
