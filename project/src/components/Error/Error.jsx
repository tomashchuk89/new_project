import React from "react";
import imgError from "./img/3333.png";
import "./Error.css";

const Error = () => {
  return (
    <>
      <h1>Error</h1>
      <h2>Failed to fetch</h2>
      <img alt="error" className="img-foto" src={imgError} />
    </>
  );
};

export default Error;
