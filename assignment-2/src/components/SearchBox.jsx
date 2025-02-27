import React, { useState } from "react";

const TextBox = ({ setArray }) => {
  const [tempText, setTempText] = useState("");

  const handleInputChange = (e) => {
    setTempText(e.target.value);
  };

  const handleButtonClick = () => {
    const array = tempText.split(",").map((item) => item.trim());
    setArray(array);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter text separated by commas"
          aria-label="Enter text separated by commas"
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
