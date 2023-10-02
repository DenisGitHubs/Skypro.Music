import React, { createContext, useContext, useState } from "react";
import AuthPage from "./AuthPage";


export const ActiveUserContext = createContext(null)


export  const ParentAuth = (props) => {

      // login/reg states
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
    <AuthPage isloginmode={props.isloginmode} setBearer={props.setBearer}/>
    </ActiveUserContext.Provider>
)
}
