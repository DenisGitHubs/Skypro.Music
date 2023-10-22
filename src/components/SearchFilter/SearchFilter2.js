import { useEffect, useState } from 'react'
import * as S from './SearchFilter.styles.js'
import { useDispatch, useSelector } from 'react-redux';
import { copyCurrentData, createFilterData, createFilterOther } from '../../store/player.slice.js';
const dataYears = ['По умолчанию', 'Сначала новые', 'Сначала старые']
let dataSingers = []
let Newdata = []
let dateSong = []
let dataFromOldToNew = []
let uniqueGenres = []
let dataFilter = []
export function Filter() {
    let idKey = 0;
    const [show, setShowSinger] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [showGenre, setShowGenre] = useState(false)
    const pageName = useSelector(state => state.player.pageName)
    const dataDefault = useSelector(state => state.player.dataDefault)
    const copyData = useSelector(state => state.player.copyData)
    const load = useSelector(state => state.player.loadingFromApi)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(Boolean(dataSingers.length === 0)){
            copyData.map(song => dataSingers.push(song.author))
            dataSingers = [...new Set(dataSingers)];
            dataSingers = dataSingers.filter(Boolean)
        }
        if(Boolean(dateSong.length === 0)){
            dataDefault.map(song => dateSong.push(song.release_date))
            dateSong = dateSong.filter(Boolean)
        }
        const genres = copyData.map(item => item.genre)
        uniqueGenres = [...new Set(genres)];
    }, [load, pageName])
    useEffect(() => {
        if(dataDefault.length === 0) {
            const Newdata = copyData
            dispatch(createFilterData({Newdata}))
        }    
    }, [dataDefault.length])
    const newKey = () => {
    idKey = idKey + 1;
    return idKey
    }
    function sort() {
    if('executor' in dataDefault[0]){
        return
    } else {
        const pattern = '-'
        const arr = copyData.filter(element => element.release_date != null)
        const arr2 = arr.map(item => item.release_date)
        const arr3 = arr2.map(e => (e.split(pattern))).map(item => item.map(el => Number(el)))
        const arr4 = arr3.map((e) => ({date: new Date(e[0], e[1], e[2]).getTime()}))
        const arr5 = arr.map((item, index) => ({...item, ...arr4[index]})) 
        return arr5.sort((a, b) => parseFloat(a.date) - parseFloat(b.date),)
    }
    }
    function searchSongsofSinger(name) {
    Newdata = Newdata.concat(copyData.filter(song => song.author === name))
    dispatch(createFilterData({Newdata}))
    }
    function deleteSongsofSinger(name) {
    Newdata = Newdata.filter(song => song.author !== name)
    dispatch(createFilterData({Newdata}))
    }
    function Singer() {
        const toggleFlag = (name) => {
            if(Newdata.length === 0) {
                searchSongsofSinger(name)
            } else {
            if(dataDefault.find(el => el.author === name)) {
                deleteSongsofSinger(name)
            } else {
                searchSongsofSinger(name)}}}
            if (show) {
            return (
                <S.Show>
                <S.ShowLink>{dataSingers.map(name => <S.FilterLink key={newKey()} onClick={() => toggleFlag(name)}> {name} </S.FilterLink>)}</S.ShowLink>
                </S.Show>  )
            }
        return (
            <S.NotShow></S.NotShow>
        )
    }
    function Genre() {
        const filterByGenre = (genre) => {
            Newdata = []
            dataFilter = copyData.filter(e => e.genre === genre)
            dispatch(createFilterOther({dataFilter}))
            const dataDefault = dataFilter
            dispatch(copyCurrentData({dataDefault}))
        }
        if (showGenre) {
            return (
                <S.Show>
                <S.ShowLink>{uniqueGenres.map(genre => <S.FilterLink key={genre} onClick={() => filterByGenre(genre)}> {genre} </S.FilterLink>)}</S.ShowLink>
                </S.Show>  )
        }
        return (
            <S.NotShow></S.NotShow>
        )
        }
        
        function Years() {
            
            const sortByDate = (year) => {
                console.log(dataDefault.filter(e => e.id !== 8))
                if(year === 'По умолчанию') {
                    Newdata = []
                    dataFilter = copyData
                    dispatch(createFilterOther({dataFilter}))
                }
                if(year === 'Сначала новые'){
                    Newdata = []
                    const dataFilter = sort().reverse()
                    dispatch(createFilterOther({dataFilter}))
                }
                if(year === 'Сначала старые'){
                    Newdata = []
                    dataFilter = sort()
                    dispatch(createFilterOther({dataFilter}))
                }
            }
            if (showYear) {
            return (
                <S.Show>
                <S.ShowLink>{dataYears.map(year => <S.FilterLink key={year} onClick={() => sortByDate(year)}> {year} </S.FilterLink>)}</S.ShowLink>
                </S.Show>  )
            }
            return (
                <S.NotShow></S.NotShow>
            )
        }

    return (<S.CenterblockFilter disabled={false}>
    <S.FilterTitle>Искать по:</S.FilterTitle>
    <div>
    <div  tabIndex="0" className="filter__button _btn-text" onClick={() => {setShowSinger(!show); setShowYear(false); setShowGenre(false)}}>
      исполнителю
    </div>
    <Singer/>
    </div>
    <div>
    <div tabIndex="0" className="filter__button button-year _btn-text" onClick={() => {setShowYear(!showYear); setShowSinger(false); setShowGenre(false)}}>
      году выпуска
    </div>
    <Years/>
    </div>
    <div>
    <div tabIndex="0" className="filter__button button-genre _btn-text" onClick={() => {setShowGenre(!showGenre); setShowSinger(false); setShowYear(false)}}>жанру</div>
    <Genre />
    </div>
  </S.CenterblockFilter>)
}







