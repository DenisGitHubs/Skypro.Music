import React, { useContext, useEffect, useState } from "react";
localStorage.removeItem('activeUser')
let userReg = JSON.parse(localStorage.getItem('activeUser'))
console.log(userReg);
export let dataUser = () => {
    if (userReg === null) {
        return (
            {
                activeUser: {
                    username: "1",
                    email: "2",
                    password: "3",
                    repeatPassword: "4"}
            }
        )
    }

    return userReg;
      }


  export const ActiveUserContext = React.createContext({
    activeUser: {
        username: dataUser.activeUser.username,
        email: dataUser.activeUser.email,
        password: dataUser.activeUser.password,
        repeatPassword: dataUser.activeUser.repeatPassword}
  
  })
  
  export const useActiveUserContext = () => {
    const [error, setError] = useState('')
    const activeUser = useContext(ActiveUserContext);
    console.log(activeUser);
    return activeUser;
  }

// function dataActiveUser() {
//     let userReg = JSON.parse(localStorage.getItem('activeUser'))
//     if (userReg === null) {
//         console.log('null')
//         return ({
//             activeUser: {
//                 username: '',
//                 email: "",
//                 password: "",
//                 repeatPassword: ""}}
//         )
//     }

//     console.log('null2');
//     return (
//         {
//             activeUser: {
//                 username: userReg.username,
//                 email: userReg.email,
//                 password: userReg.password,
//                 repeatPassword: userReg.repeatPassword}
//         }
//     )
// // }
// export  let activeUser = dataActiveUser();
// console.log(activeUser);




// {
//     "username": "",
//     "email": "",
//     "password": "",
//     "repeatPassword": ""
// }