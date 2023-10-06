import { Outlet, useNavigate } from "react-router-dom"
import { Nav } from "../NavMenu/Nav"
import 'skeleton-elements/css';
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../SearchFilter/SearchFilter"
import  Player  from "../Player/Player.js"
import RightSidebar from "../Sidebar/RightSideBar";

const Layout = (props) => {
  const navigate = useNavigate();

    const flagPlayer = useSelector(state => state.player.flagPlayer)

    const userName = JSON.parse(localStorage.getItem('Active')).Name




    const logout = () => {
      localStorage.removeItem('Active')

      navigate('/login')
      props.setBearer.setBearer(null)

    }
    const text = "";

    const restToPlayer = {
        isPlaying: props.isPlaying.isPlaying, 
        setTrackName: props.setTrackName.setTrackName,
        setSongerName: props.setSongerName.setSongerName,
        setSong: props.setSong.setSong,
        setDuration: props.setDuration.setDuration,
        setIsPlaying: props.setIsPlaying.setIsPlaying,
        song: props.song.song,
        loading: props.loading.loading,
        isLoop: props.isLoop.isLoop,
        duration: props.duration.duration,
        songerName: props.songerName.songerName,
        trackName: props.trackName.trackName,
        setIsLoop:props.setIsLoop.setIsLoop
      }
    return (
<>
<div className="container">
<main className="main">
<Nav   setBearer={props.setBearer.setBearer}/>
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
            <h2 className="centerblock__h2">{props.page === 'main' ? 'Треки' : 'Мои треки'}</h2>
{props.page === 'main' ? <Filter /> : null}
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
  <Outlet 
    loading={props.loading.loading}
    {...restToPlayer}
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
  <RightSidebar loading={props.loading.loading}/>
          </div>

</main>


{flagPlayer ? <Player
        {...restToPlayer}
        text={text}
        /> : null}
<footer className="footer" />
</div>
</>
    )
}
export {Layout}