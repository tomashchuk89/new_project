import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  const { value, onChange, onBlur, name, placeholder, label } = props;

  return (
    <>
      <div className="input-container">
        <label className="label-name">{label}</label>
        <input
          className="inputs"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
      </div>
    </>
  );
});

export default Input;
