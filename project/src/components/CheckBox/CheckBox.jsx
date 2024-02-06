import React from "react";
import { forwardRef } from "react";
import "./CheckBox.css";

const CheckBox = forwardRef((props, ref) => {
  const { checked,  onChange, onBlur, name } = props;
  return (
    <div>
      <label>
        <input
          onChange={onChange}
          checked={checked}
          type="checkbox"
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
        <span>Whan to yo give your order priority?</span>
      </label>
    </div>
  );
});

export default CheckBox;
