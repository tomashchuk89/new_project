import { forwardRef } from "react";
import "./Inputs.css";

const Inputs = forwardRef((props, ref) => {
  const { value, onChange, onBlur, name, placeholder } = props;

  return (
    <>
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
    </>
  );
});

export default Inputs;
