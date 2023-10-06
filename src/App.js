/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { AppRoutes } from "./pages/routers/routers";
import './css/signin.css';
import './css/signup.css';
import React, { useEffect, useState } from "react";

function App() {

  // const [trackName, setTrackName] = useState('');
  const [songerName, setSongerName] = useState('');
  const [timeToLoadData, setTimeToLoadData] = useState(false);
  const [newError, setNewError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false)
  const [song, setSong] = useState(null);
  const [duration, setDuration] = useState(null);
  const [changeDuration, setChangeDuration] = useState(0)
  const [bearer, setBearer] = useState(JSON.parse(localStorage.getItem('Active')))
  const [loading, setLoading] = useState(false);
  const [myFavorite, setMyFavorite] = useState(null)

  const rest = {

    myFavorite: myFavorite,
    setMyFavorite: setMyFavorite,
  loading: {loading},
  setLoading: {setLoading},
  setNewError: {setNewError},
  setBearer: {setBearer},
  bearer: {bearer},
  songerName: {songerName},
  // trackName: {trackName},
  // setTrackName: {setTrackName},
  setSongerName: {setSongerName},
  setTimeToLoadData: {setTimeToLoadData},
  timeToLoadData: {timeToLoadData},
  isPlaying: {isPlaying},
  setIsPlaying: {setIsPlaying},
  song: {song},
  setSong: {setSong},
  duration: {duration},
  setDuration: {setDuration},
  changeDuration: {changeDuration},
  setChangeDuration: {setChangeDuration},
  setIsLoop: {setIsLoop},
  isLoop: {isLoop}
}
  return (

    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./App.css" />
    <title>Skypro</title>
    <div className="wrapper">
    <AppRoutes
    {...rest}
    />
    </div>
  </>

  );
}
export default App;