import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { UserContext } from "../../context/UserInfoContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShemaName } from "../../validationShema";
import Input from "../../components/Input/Input";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const { setName } = useContext(UserContext);

  const {
    handleSubmit,
    formState: { errors },
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
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="User Name"
                  placeholder="Name"
                />
              )}
            />
          </div>
          {errors.name && <p className="errors">{errors.name.message}</p>}
          <Button buttonText="Log In" />
        </form>
      </div>
    </>
  );
};

export default Login;
