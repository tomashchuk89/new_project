import React from "react";
import "./CheckBox.css";

const CheckBox = ({ handleCheckboxChange, isChecked }) => {
  return (
    <div>
      <label>
        <input
          onChange={handleCheckboxChange}
          checked={isChecked}
          type="checkbox"
        />
        <span>Whan to yo give your order priority?</span>
      </label>
    </div>
  );
};

export default CheckBox;
