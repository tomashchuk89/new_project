
import { useController } from "react-hook-form";
import "./Input.css";

const Input = (props) => {
  const {field, fieldState } = useController (props);
  const {label, message} = props

  return (
    <>
      <div className="">
        <div className="input-container">
          <label className="label-name">{label}</label>
          <input className="inputs" {...field} type="text" />
        </div>
        <p className="error-input"> {fieldState.error && message}</p>
      </div>
    </>
  );
};

export default Input;
