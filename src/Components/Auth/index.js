import React, { useContext, useEffect } from 'react'
import Login from '../Login'
import LoggedIn from '../LoggedIn';
import { UserContext } from "../../context/UserContext";

function Auth() {

  const [user, setUser] = useContext(UserContext)

  const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
      if (userInLocalStorage !== null) {

        setUser(userInLocalStorage)
       
      }
     
    
    },[])
  
  return (
    <div>
      {!user.isAuth && <Login />}
      {user.isAuth && <LoggedIn />} 
    </div>
  );
}

export default Auth;