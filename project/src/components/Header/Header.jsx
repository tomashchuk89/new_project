import React from "react";
import "./Header.css";
import { UserContext } from "../../context/UserInfoContext";
import { useContext } from "react";

const Header = () => {
  const { names } = useContext(UserContext);
  return (
    <div>
      <div className="header-bg">
        <h2 className="login-name">User Name: {names} </h2>
      </div>
    </div>
  );
};

export default Header;
