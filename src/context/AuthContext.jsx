import React, { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();
const isUserLoggedIn = JSON.parse(localStorage.getItem("IsLogged")) || false;
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(isUserLoggedIn);
  const [currentUser, setCurrentUser] = useState({});
  let value = { isAuth, SignIn,SignUp,apidata,currentUser };
  function SignIn() {
    var currentUserData = JSON.parse(localStorage.getItem("loginUser"));
    setCurrentUser(currentUserData);
    setIsAuth(true);
    localStorage.setItem("IsLogged", JSON.stringify(true));
  }
  async function SignUp(data) {
    var users = JSON.parse(localStorage.getItem("Users") || "[]");
    users.push(data);
    localStorage.setItem("Users", JSON.stringify(users));

    let res1=await fetch("https://busy-houndstooth-clam.cyclic.app/users",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
     
    })
    res1= await res1.json()
  }
  async function apidata(data) {

    let res=await fetch("https://busy-houndstooth-clam.cyclic.app/projects",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
     
    })
    res= await res.json()
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;