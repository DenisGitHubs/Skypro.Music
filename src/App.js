/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { AppRoutes } from "./pages/routers/routers";
import './css/signin.css';
import './css/signup.css';
import React, { useEffect, useState, useContext } from "react";
import { getAllTracks } from './Api';


function App() {
  const [allTracks, setAllTracks] = useState([ 
    {id: 1, track: "Guilt", executor: "Nero", album: "Welcome Reality", time: "4:44"},
    {id: 2, track: "Elektro", executor: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time: "2:22", secondname: ""},
    {id: 3, track: "Iam Fire", executor: "Ali Bakgor", album: "Iam Fire", time: "2:22"},
    {id: 4, track: "Non Stop", secondname: "(Remix)", executor: "Стоункат, Psychopath", album: "Non Stop", time: "4:12"},
    {id: 5, track: "Run Run", secondname: "(feat. AR/CO)", executor: "Jaded, Will Clarke, AR/CO", album: "Run Run", time: "2:54"},
    {id: 6, track: "Eyes on Fire", secondname: "(Zeds Dead Remix)", executor: "Blue Foundation, Zeds Dead", album: "Eyes on Fire", time: "5:20"},
    {id: 7, track: "Mucho Bien", secondname: "(Hi Profile Remix)", executor: "HYBIT, Mr. Black, Offer Nissim, Hi Profile", album: "Mucho Bien", time: "3:41"},
    {id: 8, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
    {id: 9, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
    {id: 10, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
    {id: 11, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
    {id: 12, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"}
]);
  const [player, setPlayer] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [songerName, setSongerName] = useState('');
  const [timeToLoadData, setTimeToLoadData] = useState(false);
  const [newError, setNewError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false)
  const [song, setSong] = useState(null);
  const [duration, setDuration] = useState(null);
  const [changeDuration, setChangeDuration] = useState(0)


// useEffect(() => {
// // localStorage.removeItem('activeUser')
//   let userReg = JSON.parse(localStorage.getItem('activeUser'))
//   if (!userReg) {
//     const activeUser = { username: `${email}`, email: `${email}`, password: `${password}`, repeatPassword: `${repeatPassword}` }
//     localStorage.setItem('activeUser', JSON.stringify(activeUser));
//     return
//   }
//   setEmail(userReg.email)
//   setPassword(userReg.password)
//   setRepeatPassword(userReg.repeatPassword)
//   // dataUser.activeUser.email = email
//   // dataUser.activeUser.username = email
//   // dataUser.activeUser.password = password
//   // dataUser.activeUser.repeatPassword = repeatPassword
//   const activeUser = { username: `${email}`, email: `${email}`, password: `${password}`, repeatPassword: `${repeatPassword}` }
//   localStorage.setItem('activeUser', JSON.stringify(activeUser));

// }, []);



useEffect(() => {
  const fetchData = async () => {
    try {
      getAllTracks().then((tracks) => {
        setAllTracks(tracks);    
      })

    } catch (error) {
      setNewError(error.message)
    }

  }
fetchData()

}, []);

let  massiveData = allTracks

  return (

    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./App.css" />
    <title>Skypro</title>
    <div className="wrapper">
    <AppRoutes

    massiveData={massiveData}
    songerName={songerName}
    trackName={trackName}
    setTrackName={setTrackName}
    setSongerName={setSongerName}
    player={player}
    setPlayer={setPlayer}
    setTimeToLoadData={setTimeToLoadData}
    timeToLoadData={timeToLoadData}
    setAllTracks={setAllTracks}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
    song={song}
    setSong={setSong}
    allTracks={allTracks}
    duration={duration}
    setDuration={setDuration}
    changeDuration={changeDuration}
    setChangeDuration={setChangeDuration}
    setIsLoop={setIsLoop}
    isLoop={isLoop}
    />
    </div>
  </>

  );
}

// onAuthButtonClick={localStorage["user"] ? logout : login}
export default App;
