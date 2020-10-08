
import React, { useState, createContext, useEffect } from "react"

//if user === true => user is connected

export const UserContext = createContext()

export const UserProvider = (props) => {

  
  const [user, setUser] = useState({
    email: "",
    login: "",
    isAuth: false
  })
  
return (
  <UserContext.Provider value={[user, setUser]}>
    {props.children}
  </UserContext.Provider>
)
}