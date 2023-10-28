
import React, { useEffect, useState } from 'react'
import * as S from './SearchFilter.styles.js'
import { Singer } from './components/Author.jsx';
import { Years } from './components/Date.jsx';
import { Genre } from './components/Genre.jsx';
export function Filter() {
    const [show, setShowSinger] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [showGenre, setShowGenre] = useState(false);
    const [flagFilterSingers, setFlagFilterSingers] = useState(false)
    const [counterSingers, setCounterSingers] = useState(0);
    const [flagFilterGenres, setFlagFilterGenres] = useState(false)
    const [counterGenres, setCounterGenres] = useState(0);
    const [flagSortYears, setFlagSortYears] = useState(false)
    const [counterYears, setCounterYears] = useState(0);
    const propsDate = {
        show: show,
        showYear: showYear,
        showGenre: showGenre,
        setCounterSingers: setCounterSingers,
        counterSingers: counterSingers,
        counterGenres: counterGenres,
        setCounterGenres: setCounterGenres,
        setCounterYears: setCounterYears,
  }
useEffect(() => {
  if(counterSingers === 0) {
    setFlagFilterSingers(false)
  } else {
    setFlagFilterSingers(true)
  }
}, [counterSingers])
useEffect(() => {
  if(counterGenres === 0) {
    setFlagFilterGenres(false)
  } else {
    setFlagFilterGenres(true)
  }
}, [counterGenres])

useEffect(() => {
  if(counterYears === 0) {
    setFlagSortYears(false)
  } else {
    setFlagSortYears(true)
  }
}, [counterYears])

    return (<S.CenterblockFilter >
    <S.FilterTitle>Искать по:</S.FilterTitle>
    <S.FilterBox >
        <div>
            <S.CounterImg flag={flagFilterSingers}><S.CounterText>{counterSingers}</S.CounterText></S.CounterImg>
        </div>
    <div  tabIndex="0" className="filter__button _btn-text" onClick={() => {setShowSinger(!show); setShowYear(false); setShowGenre(false)}}>
      исполнителю
    </div>
    <Singer propsDate={propsDate} setCounterSingers={setCounterSingers} />
    </S.FilterBox>
    <S.FilterBox >
    <div>
            <S.CounterImg flag={flagSortYears}><S.CounterText>{counterYears}</S.CounterText></S.CounterImg>
        </div>
    <div tabIndex="0" className="filter__button button-year _btn-text" onClick={() => {setShowYear(!showYear); setShowSinger(false); setShowGenre(false)}}>
      году выпуска
    </div>
    <Years propsDate={propsDate}/>
    </S.FilterBox>
    <S.FilterBox >
    <div>
            <S.CounterImg flag={flagFilterGenres}><S.CounterText>{counterGenres}</S.CounterText></S.CounterImg>
      </div>
    <div tabIndex="0" className="filter__button button-genre _btn-text" onClick={() => {setShowGenre(!showGenre); setShowSinger(false); setShowYear(false)}}>жанру</div>
    <Genre propsDate={propsDate}/>
    </S.FilterBox>
  </S.CenterblockFilter>)
}
