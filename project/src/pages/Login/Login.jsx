import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { UserContext } from "../../context/UserInfoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShemaName } from "../../validationShema";
import Input from "../../components/Input/Input";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const { setName } = useContext(UserContext);

  const {
    handleSubmit,
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(validationShemaName),
  });

  const handleSubmitLogin = (data) => {
    if (data.name) {
      setName(data.name);
      reset();
      navigate("/menu");
    }
  };

  return (
    <>
      <div className="bg-log">
        <form className="form" onSubmit={handleSubmit(handleSubmitLogin)}>
          <div className="input-container">
            <Input control={control} name='name' label="User Name" message="Please enter a name"/>    
          </div>        
          <Button buttonText="Log In" className="btn-login" />
        </form>
      </div>
    </>
  );
};

export default Login;
