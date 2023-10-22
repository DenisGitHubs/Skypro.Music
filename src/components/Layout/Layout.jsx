import { Outlet, useNavigate } from "react-router-dom"
import { Nav } from "../NavMenu/Nav"
import 'skeleton-elements/css';
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../SearchFilter/SearchFilter"
import { comeBackData, copyCurrentData, createFilterOther, deleteUser } from "../../store/player.slice";
import  Player  from "../Player/Player.js"
import RightSidebar from "../Sidebar/RightSideBar";
import { useEffect, useState } from "react";

const Layout = () => {
  const dataDefault = useSelector(state => state.player.dataDefault)
  const copyData = useSelector(state => state.player.copyData)
  const [find, setFind] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const flagPlayer = useSelector(state => state.player.flagPlayer)
  const pageName = useSelector(state => state.player.pageName)
  const userName = JSON.parse(localStorage.getItem('userName'))
  const copyNowData = useSelector(state => state.player.copyNowData)
  const load = useSelector(state => state.player.loadingFromApi)
  useEffect(() => {
    dispatch(copyCurrentData({dataDefault}))
    setFind('')
  }, [pageName, load])

  useEffect(() => {
    if (find.length > 0){
    const toLowerConst = find.toLowerCase()
    let pattern = new RegExp(toLowerConst)
    const dataFilter = dataDefault.filter(e => pattern.test(e.name.toLowerCase()))
      dispatch(createFilterOther({dataFilter}))
  }
  if (find.length === 0){
      const dataFilter = copyNowData
      dispatch(createFilterOther({dataFilter}))
  }
  }, [find])
  const logout = () => {
    localStorage.removeItem('userName')
    navigate('/login')
    dispatch(deleteUser())
}
const togglePageName = () => {
  if(pageName === 'main') {return "Треки"};
  if(pageName === 'favorites') {return "Мои треки"};
  if(pageName === 'rock') {return "Рок-музыка"};
  if(pageName === 'classic') {return "Классичесая музыка"};
  if(pageName === 'electro') {return "Электронная музыка"};
};


    return (
<>
<div className="container">
<main className="main">
<Nav />
<div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="/img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
                value={find}
                onChange={(event) => {setFind(event.target.value)}}
              />
            </div>
            <h2 className="centerblock__h2">{togglePageName()}</h2>
{pageName === 'main' ? <Filter /> : null}
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
  <Outlet />
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
  <RightSidebar />
          </div>

</main>


{flagPlayer ? <Player id='player'/> : null}
<footer className="footer" />
</div>
</>
    )
}
export {Layout}