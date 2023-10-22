import { useDispatch, useSelector } from 'react-redux'
import * as S from '../SearchFilter.styles.js'
import { createDataSortByDate } from '../../../store/player.slice.js';
import { useState } from 'react';



export function Years(props) {
    const dataYears = ['По умолчанию', 'Сначала новые', 'Сначала старые'];
    const [bySort, setBySort] = useState ('')
    const dataDefault = useSelector(state => state.player.dataDefault)
    const dispatch = useDispatch()
    function sortById() {
        const result = [...dataDefault]
        return result.sort((a, b) => a.id > b.id ? 1 : -1)
    }

    function sort() {
        if('executor' in dataDefault[0]){
            return
        } else {
            const pattern = '-'
            const arr = dataDefault.filter(element => element.release_date != null)
            const arr2 = arr.map(item => item.release_date)
            const arr3 = arr2.map(e => (e.split(pattern))).map(item => item.map(el => Number(el)))
            const arr4 = arr3.map((e) => ({date: new Date(e[0], e[1], e[2]).getTime()}))
            const arr5 = arr.map((item, index) => ({...item, ...arr4[index]}))
            return arr5.sort((a, b) => parseFloat(a.date) - parseFloat(b.date),)
        }
        }
        function isSelected (year) {
            if(bySort === year){
                return true
            } else {
                return false}
    }        
    function handleCounterOfYears(year) {
            if(year === 'По умолчанию'){
            props.propsDate.setCounterYears(0)
            } 
            if(year === 'Сначала новые') {
            props.propsDate.setCounterYears(`\u25B2`)
                }
            if(year === 'Сначала старые') {
            props.propsDate.setCounterYears(`\u25BC`)
                }
            }
    const sortByDate = (year) => {
        handleCounterOfYears(year)
        if(year === 'По умолчанию') {
            const data = sortById()
            setBySort('По умолчанию')
            dispatch(createDataSortByDate({data}))
        }
        if(year === 'Сначала новые'){
            setBySort('Сначала новые')
            const data = sort().reverse()
            dispatch(createDataSortByDate({data}))
        }
        if(year === 'Сначала старые'){
            setBySort('Сначала старые')
            const data = sort()
            dispatch(createDataSortByDate({data}))
        }
        
    }
    return (
        <S.Show show={props.propsDate.showYear}>
        <S.ShowLink >{dataYears.map(year => <S.FilterLink isSelected={isSelected(year)} key={year} onClick={() => sortByDate(year)}> {year} </S.FilterLink>)}</S.ShowLink>
        </S.Show>  )
}




