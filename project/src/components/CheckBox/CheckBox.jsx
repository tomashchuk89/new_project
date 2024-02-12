import React from "react";
import { useController } from "react-hook-form";
import "./CheckBox.css";

const CheckBox = (props) => {
  const { field } = useController(props);
  const { onClick, label } = props;
  return (
    <div>
      <label>
        <input
          {...field}
          onClick={(e) => {
            onClick(e.target.checked);
          }}
          type="checkbox"
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
