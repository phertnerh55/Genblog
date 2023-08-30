"use client";
import { createContext, useState, useContext } from "react";
export const StateContext = createContext();

function StateProvider({ children }) {
  const [isLogin, setIsLogin] = useState({
    is_loggedin: localStorage.getItem("access")?true:false,
    username: "",
    email: "",
  });
  const [isSignUp, setIsSignUp]=useState({})


  return (
    <StateContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isSignUp,setIsSignUp
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
export default StateProvider;
