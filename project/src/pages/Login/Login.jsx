import React from 'react';
import { useState, useContext } from 'react';
import  {UserContext} from '../../components/context/UserInfoContext';
import './Login.css';


const Login = () => {

  const [userName, setUserName] = useState('');
  const { setName } = useContext(UserContext);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (userName) { 
      setName(userName);
      console.log('USER NAME:', userName);
      setUserName('')
    } else {
      console.log('Write a username!')
    }
  };

  const handleChangeLogin = (e) => {
    setUserName(e.target.value)
  }


  return (
    <>
      <div className='bg-log'>
        <form className='form' onSubmit={handleSubmitLogin}>
          <label className='name-form'>User Name </label> <br />

          <input
            className='input-form'
            type="text"
            pattern="[A-Za-z0-9]+"
            minLength="3"
            maxLength="10"
            value={userName}
            onChange={handleChangeLogin}
          />

          <button className='btn-form' type="submit" >
            Log in
          </button>
        </form>
      </div>
    </>
  )
}

export default Login