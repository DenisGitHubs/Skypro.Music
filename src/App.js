/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { AppRoutes } from "./pages/routers/routers";
import './css/signin.css';
import './css/signup.css';
import { useState } from "react";
import { getAllTracks } from './Api';

function App() {
  const [user, setUser] = useState('');
  const [allTracks, setAllTracks] = useState(null);
  const [player, setPlayer] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [songerName, setSongerName] = useState('');
  const login = () => setUser("taradam" );
  const logout = () => setUser('');
  localStorage.setItem("user", user);
  // useEffect(() => {
  //   getAllTracks().then((tracks) => {console.log(tracks);
  //     // setAllTracks(.todos)
  //   })
  // }, []);

  return (

    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./App.css" />
    <title>Skypro</title>
    <div className="wrapper">
    <AppRoutes player={player} 
    setPlayer={setPlayer} 
    user={localStorage["user"]}
    trackName={trackName}
    setTrackName={setTrackName}
    songerName={songerName}
    setSongerName={setSongerName}
    onAuthButtonClick={localStorage["user"] ? logout : login}/>
    </div>
  </>

  );
}


export default App;
