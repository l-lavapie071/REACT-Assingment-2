import React, { useState } from "react";
import { fetchRecipes } from "../assets/api";

const TextBox = ({ setRecipes }) => {
  const [tempText, setTempText] = useState("");

  const handleInputChange = (e) => {
    setTempText(e.target.value);
  };

  const handleButtonClick = async () => {
    const recipes = await fetchRecipes(
      tempText,
      "67a057f0478d4c5b8b732c3c5a627c6a"
    );
    setRecipes(recipes);
  };

  return (
    <div>
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
