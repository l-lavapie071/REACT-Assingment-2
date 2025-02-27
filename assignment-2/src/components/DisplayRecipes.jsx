import React from "react";

const DisplayRecipes = ({ array }) => {
  return (
    <div>
      <h3>Recipes</h3>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayRecipes;
