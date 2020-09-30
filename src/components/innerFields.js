// lib
import React, { useState } from "react";

//src
import { getRoundedValue } from "../utils/helpers";
import "./innerFields.css";

const InnerFields = (props) => {
  const [input, setInput] = useState("");
  const { isFetching, result, handleFind } = props;

  const handleChange = (e) => {
    e.preventDefault();
    const number = Number.parseInt(e.target.value);
    if (!isNaN(number) && number >= 0) {
      setInput(e.target.value);
    }
  };

  const handleClick = () => {
    if (input !== "") {
      handleFind(input);
      setInput("");
    }
  };

  return (
    <div className="container-fields">
      <div className="fields-container">
        <input
          type="number"
          min="0"
          value={input}
          className="input-field"
          data-testid="content-input"
          onChange={handleChange}
        />
        <button
          className="button"
          data-testid="button-search"
          onClick={handleClick}
        >
          Calculate square root
        </button>
      </div>
      {isFetching ? (
        <div className="loader-block">
          <div className="loader"></div>
          <div className="stop" role="alert">
            Processing
          </div>
        </div>
      ) : (
        <div className="result">
          {result && `Result: ${getRoundedValue(result)}`}
        </div>
      )}
    </div>
  );
};

export default InnerFields;
