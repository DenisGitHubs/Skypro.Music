import * as S from '../SearchFilter.styles.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDataFilterByGenres, createDataSortByAllFilters } from '../../../store/player.slice';
let uniqueGenres=[];

export function Genre(props) {
    const dispatch = useDispatch()
    const load = useSelector(state => state.player.loadingFromApi)
    const copyData = useSelector(state => state.player.copyData);
    const dataFilterByGenres = useSelector(state => state.player.dataFilterByGenres)
    useEffect(() => {
        const genres = copyData.map(item => item.genre)
        uniqueGenres = [...new Set(genres)];
    }, [load])
    function isSelected (genre) {
        if(dataFilterByGenres.find(el => el.genre === genre)){
            return true
        } else {
            return false}
}
        function handleCounterOfGenre(genre) {
    if(dataFilterByGenres.find(el => el.genre === genre)){
        props.propsDate.setCounterGenres(props.propsDate.counterGenres - 1)
    } else {
        props.propsDate.setCounterGenres(props.propsDate.counterGenres + 1)
        }
}
    const filterByGenre = (genre) => {
        handleCounterOfGenre(genre)
        if(dataFilterByGenres.length === 0) {
            const data = copyData.filter(e => e.genre === genre)
            dispatch(createDataFilterByGenres({data}))
            dispatch(createDataSortByAllFilters())
            return
        }
        if(dataFilterByGenres.length > 0) {
            if(dataFilterByGenres.find(e => e.genre === genre)) {
                const data = dataFilterByGenres.filter(e => e.genre !== genre)
                dispatch(createDataFilterByGenres({data}))
                dispatch(createDataSortByAllFilters())
                return
            }
            if(dataFilterByGenres.find(e => e.genre !== genre)) {
                const searchResult = copyData.filter(e => e.genre === genre)
                const data = [...dataFilterByGenres, ...searchResult]
                dispatch(createDataFilterByGenres({data}))
                dispatch(createDataSortByAllFilters())
                return
            }
        }
        handleCounterOfGenre(genre)
        }
        return (
            <S.Show show={props.propsDate.showGenre}>
            <S.ShowLink>{uniqueGenres.map(genre => <S.FilterLink isSelected={isSelected(genre)} key={genre} onClick={() => filterByGenre(genre)}> {genre} </S.FilterLink>)}</S.ShowLink>
            </S.Show>  )
    }
    
