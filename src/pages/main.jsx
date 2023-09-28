import '../App.css';
import DataSong from '../components/Tracks/DataTrack.js';
import RightSidebar from '../components/Sidebar/RightSideBar.js';
import { Nav } from '../components/NavMenu/Nav.js'
import 'skeleton-elements/css';
import { Filter } from "../components/SearchFilter/SearchFilter.js";
import React, { useState, useEffect } from "react";
import Player from '../components/Player/Player';
import { useNavigate } from 'react-router-dom';
import { getAllTracks } from '../Api';
import { useDispatch, useSelector } from 'react-redux';
import { dataSongs } from '../store/player.slice';


export const Main = ({ 
  setNewError,
 songerName, 
  trackName, setTrackName, 
  setSongerName, 
  error,
  isPlaying,
  setIsPlaying,
  song,
  setSong,
  duration,
  setDuration,
  changeDuration,
  setChangeDuration,
  setIsLoop,
  isLoop,
  setBearer

 }) => {
const flagPlayer = useSelector(state => state.player.flagPlayer)
const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        getAllTracks().then((tracks) => {
          dispatch(dataSongs({tracks}))

        })
  
      } catch (error) {
        setNewError(error.message)
      }
  
    }
  fetchData()
  }, []);


  const navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem('Active')
      navigate('/login')
      setBearer(null)

    }
    const userName = JSON.parse(localStorage.getItem('Active')).Name

    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }, []);

    const text = "";
    return (
        <div className="container">
        <main className="main">
          
  <Nav   setBearer={ setBearer}/>
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
<Filter />
            <div className="centerblock__content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                  </svg>
                </div>
              </div>
              <div className="content__playlist playlist">
  <DataSong loading={loading}
    isPlaying={isPlaying}
    setTrackName={setTrackName}
    setSongerName={setSongerName}
    setSong={setSong}
    setDuration={setDuration}
    setIsPlaying={setIsPlaying}
    song={song}
 />
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">{userName}</p>
              <div className="sidebar__icon" onClick={logout}>
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout" />
                </svg>
              </div>
            </div>
  <RightSidebar loading={loading}/>
          </div>
        </main>
        {flagPlayer ? <Player 
        songerName={songerName}
        trackName={trackName}
        loading={loading} 
        text={text}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        song={song}
        setSong={setSong}
        setTrackName={setTrackName}
        setSongerName={setSongerName}
        duration={duration}
        setDuration={setDuration}
        changeDuration={changeDuration}
        setChangeDuration={setChangeDuration}
        setIsLoop={setIsLoop}
        isLoop={isLoop}
        /> : null}
        <footer className="footer" />
      </div>
    );
  }