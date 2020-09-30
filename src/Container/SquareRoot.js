// lib
import React, { useState } from "react";

// src
import InnerFields from "../components/innerFields";
import { defaultState } from "../constants";

const SquareRoot = () => {
  const [state, setState] = useState(defaultState);

  const fetchData = (input) => {
    setState({ isFetching: true });
    const url = `/default/front_end_hiring?input=${input}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, result: data.result, isFetching: false });
      });
  };

  const { result, isFetching } = state;

  return (
    <div>
      <h2>Square Root Finder</h2>
      <InnerFields
        isFetching={isFetching}
        result={result}
        handleFind={fetchData}
      />
    </div>
  );
};

export default SquareRoot;
