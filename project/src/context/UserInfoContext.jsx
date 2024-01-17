import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const UserInfoContext = ({ children }) => {
  const [names, setName] = useState("");

  return (
    <UserContext.Provider value={{ names, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserInfoContext;
