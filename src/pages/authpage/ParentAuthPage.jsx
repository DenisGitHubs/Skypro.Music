import React, { createContext, useContext, useState } from "react";
import AuthPage from "./AuthPage";


export const ActiveUserContext = createContext('')


export  const ParentAuth = () => {
      // login/reg states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
console.log(email);
console.log('object');
return (
        <ActiveUserContext.Provider value={{
        email,
        setEmail,
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword
        }} >
    <AuthPage isLoginMode={true}/>
    </ActiveUserContext.Provider>
)
}