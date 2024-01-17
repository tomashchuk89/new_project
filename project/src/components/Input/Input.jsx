import React from "react";
import "./Input.css";

const Input = ({ userName, handleChangeLogin }) => {
  return (
    <>
      <input
        className="input-form"
        type="text"
        pattern="[A-Za-z0-9]+"
        minLength="3"
        maxLength="10"
        value={userName}
        onChange={handleChangeLogin}
      />
    </>
  );
};

export default Input;
