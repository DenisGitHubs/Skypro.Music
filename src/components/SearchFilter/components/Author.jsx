import { useEffect } from 'react'
import * as S from '../SearchFilter.styles.js'
import { useDispatch, useSelector } from 'react-redux'
import { createDataFilterBySingers, createDataSortByAllFilters } from '../../../store/player.slice.js';
let ListOfSingers = [];
export function Singer(props) {
    const dispatch = useDispatch()
    const dataFilterBySingers = useSelector(state => state.player.dataFilterBySingers)
    const load = useSelector(state => state.player.loadingFromApi)
    const copyData = useSelector(state => state.player.copyData);
useEffect(() => {
    if(Boolean(ListOfSingers.length === 0)){
        copyData.map(song => ListOfSingers.push(song.author))
        ListOfSingers = [...new Set(ListOfSingers)];
        ListOfSingers = ListOfSingers.filter(Boolean)
    }
}, [load])
    function isSelected (name) {
        if(dataFilterBySingers.find(el => el.author === name)){
            return true
        } else {
            return false}
}
function handleCounterOfSinger(name) {
    if(dataFilterBySingers.find(el => el.author === name)){
        props.propsDate.setCounterSingers(props.propsDate.counterSingers - 1)
    } else {
        props.propsDate.setCounterSingers(props.propsDate.counterSingers + 1)
        }
}

function searchSongsofSinger(name) {
const data = dataFilterBySingers.concat(copyData.filter(song => song.author === name))
dispatch(createDataFilterBySingers({data}))

}
function deleteSongsofSinger(name) {
const data = dataFilterBySingers.filter(song => song.author !== name)
dispatch(createDataFilterBySingers({data}))
}
const filterBySingers = (name) => {
    if(dataFilterBySingers.length === 0) {
        searchSongsofSinger(name);
        dispatch(createDataSortByAllFilters())
    } else {
    if(dataFilterBySingers.find(el => el.author === name)) {
        deleteSongsofSinger(name)
        dispatch(createDataSortByAllFilters())
    } else {
        searchSongsofSinger(name);
        dispatch(createDataSortByAllFilters())
    }}
    handleCounterOfSinger(name)
} 
    return (
        <S.Show show={props.propsDate.show}>
        <S.ShowLink>{ListOfSingers.map(name =>  <S.FilterLink isSelected={isSelected(name)} key={name}
         onClick={() => filterBySingers(name)} > {name} </S.FilterLink>)}</S.ShowLink>
        </S.Show>  )

}


