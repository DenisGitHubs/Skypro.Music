import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { copyCurrentData, createDataBySearch } from "../../../store/player.slice"

export function SearchSys() {
    const [find, setFind] = useState('')
    const load = useSelector(state => state.player.loadingFromApi)
    const dataDefault = useSelector(state => state.player.dataDefault)
    const pageName = useSelector(state => state.player.pageName)
    const copyDataBeforeSearch = useSelector(state => state.player.copyDataBeforeSearch)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(copyCurrentData({dataDefault}))
        setFind('')
      }, [pageName, load])

      useEffect(() => {
    if (find.length > 0){
    const toLowerConst = find.toLowerCase()
    let pattern = new RegExp(toLowerConst)
    const data = copyDataBeforeSearch.filter(e => pattern.test(e.name.toLowerCase()))
      dispatch(createDataBySearch({data}))
  }
  if (find.length === 0){
      const data = copyDataBeforeSearch
      dispatch(createDataBySearch({data}))
  }
  }, [find])
    return (
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
    )
}