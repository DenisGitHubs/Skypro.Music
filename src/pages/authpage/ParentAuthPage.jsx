import React, { createContext, useState } from "react";
import AuthPage from "./AuthPage";


export const ActiveUserContext = createContext(null)
export  const ParentAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
return (
        <ActiveUserContext.Provider value={{
        email,
        setEmail,
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword
        }} >
    <AuthPage />
    </ActiveUserContext.Provider>
)
}
