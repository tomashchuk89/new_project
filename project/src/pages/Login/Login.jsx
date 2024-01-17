import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { UserContext } from "../../context/UserInfoContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const { setName } = useContext(UserContext);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (userName) {
      setName(userName);
      console.log("USER NAME:", userName);
      setUserName("");
      navigate("/menu");
    } else {
      console.log("Write a username!");
    }
  };

  const handleChangeLogin = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <div className="bg-log">
        <form className="form" onSubmit={handleSubmitLogin}>
          <label className="name-form">User Name </label> <br />
          <Input userName={userName} handleChangeLogin={handleChangeLogin} />
          <Button />
        </form>
      </div>
    </>
  );
};

export default Login;
