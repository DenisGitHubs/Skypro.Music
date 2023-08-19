/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import './App.css';
import DataSong from './components/DataTrack.js';
import RightSidebar from './components/RightSideBar.js';
import { Nav } from './components/Nav.js'
import 'skeleton-elements/css';
import { Filter } from "./components/SearchFilter.js";

const App = (props) => {
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
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./App.css" />
    <title>Skypro</title>
    <div className="wrapper">
      <div className="container">
        <main className="main">
          
  <Nav />
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
  <DataSong loading={loading}/>
              </div>
            </div>
          </div>
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref="img/icon/sprite.svg#logout" />
                </svg>
              </div>
            </div>
  <RightSidebar loading={loading}/>
          </div>
        </main>
        <div className="bar">
          <div className="bar__content">
            <div className="bar__player-progress" />
            <div className="bar__player-block">
              <div className="bar__player player">
                <div className="player__controls">
                  <div className="player__btn-prev">
                    <svg className="player__btn-prev-svg" alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div className="player__btn-play _btn">
                    <svg className="player__btn-play-svg" alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div className="player__btn-next">
                    <svg className="player__btn-next-svg" alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div className="player__btn-repeat _btn-icon">
                    <svg className="player__btn-repeat-svg" alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div className="player__btn-shuffle _btn-icon">
                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </div>
                <div className="player__track-play track-play">
                  <div className="track-play__contain">
                    <div className="track-play__image">
                      <svg className="track-play__svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className="track-play__author">
                      <a className={!loading ? "track-play__author-link" : "track-play__author-link skeleton-block skeleton-effect-fade"} href="http://">
                        {loading ? text : "Ты та..."}
                      </a>
                    </div>
                    <div className="track-play__album">
                      <a className={!loading ? "track-play__album-link" : "track-play__album-link skeleton-block skeleton-effect-fade"} href="http://">
                      {loading ? text : "Баста"}
                      </a>
                    </div>
                  </div>
                  <div className="track-play__like-dis">
                    <div className="track-play__like _btn-icon">
                      <svg className="track-play__like-svg" alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div className="track-play__dislike _btn-icon">
                      <svg className="track-play__dislike-svg" alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bar__volume-block volume">
                <div className="volume__content">
                  <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </svg>
                  </div>
                  <div className="volume__progress _btn">
                    <input
                      className="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" />
      </div>
    </div>
  </>
  );
};

// export const Timer = (props) => {
//   const [seconds, setSeconds] = useState(5)
//   const [show, setShow] = useState(false)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         setShow(true)
//         console.log(show);
//         App()
//       }
//     }, 1000)
// console.log(seconds);
//     return () => clearInterval(timer)
//   }, [seconds]);

// };


export default App;
