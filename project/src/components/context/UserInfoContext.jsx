import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext(null);
UserContext.displayName = 'UserContext';

const UserInfoContext = ({children}) => {

    const [name, setName] = useState('');


  return (
   <UserContext.Provider value={{name, setName}}>
          {children}
    </UserContext.Provider>
  )
}

export default UserInfoContext