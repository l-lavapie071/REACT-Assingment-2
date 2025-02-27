import React, { useState } from "react";

const TextBox = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      {/* <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text here"
      /> */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter text here"
          aria-label="Enter text here"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            Seach
          </button>
        </div>
      </div>

      <p>You entered: {inputText}</p>
    </div>
  );
};

export default TextBox;
