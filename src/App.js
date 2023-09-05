/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { AppRoutes } from "./pages/routers/routers";
import './css/signin.css';
import './css/signup.css';
import { useState } from "react";


// const App = () => {

//   return (
//     <>
//     <meta charSet="UTF-8" />
//     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="./App.css" />
//     <title>Skypro</title>
//     <div className="wrapper">
//     <AppRoutes />
//     </div>
//   </>
//   );
// };

function App() {
  const [user, setUser] = useState('');

  const login = () => setUser("taradam" );
  const logout = () => setUser('');
  localStorage.setItem("user", user);
  console.log(localStorage["user"]);
  return (

    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./App.css" />
    <title>Skypro</title>
    <div className="wrapper">
    <AppRoutes user={localStorage["user"]} onAuthButtonClick={localStorage["user"] ? logout : login}/>
    </div>
  </>

  );
}


export default App;
