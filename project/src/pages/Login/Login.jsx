import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { UserContext } from "../../context/UserInfoContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationShema } from "../../validationShema";
import Inputs from "../../components/Inputs/Inputs";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const { setName } = useContext(UserContext);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: '' 
    
    },
    resolver: yupResolver(validationShema),
  });


  const handleSubmitLogin = (data) => {

    if (userName) {
      setName(userName);
      console.log("USER NAME:", userName);
      reset();
      navigate("/menu");
    } 
  }

  const handleChangeLogin = (e) => {
    setUserName(e.target.value);
 
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
              <Inputs {...field} label="User Name" 
              value={userName}
              onChange={handleChangeLogin}
              placeholder="Name" 
              />
            )}
          />
        </div>
        {errors.name && <p className="errors">{errors.name.message}</p>}


          {/* <Input userName={userName} handleChangeLogin={handleChangeLogin} /> */}
          <Button buttonText='Log In'/>
        </form>
      </div>
    </>
  );
};

export default Login;
