
import { useState } from 'react'
import * as S from './SearchFilter.styles.js'

const dataSingers = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath", "Jaded, Will Clarke, AR/CO", "minthaze", "Blue Foundation, Zeds Dead", "HYBIT, Mr. Black, Offer Nissim, Hi Profile"]
const dataYears = ['1990', '1995', '1999'];
const dataGenre = ['Фолк-музыка', 'Кантри', 'Джаз', 'Блюз', ' Ритм-н-блюз', 'романс', 'Фламенко', 'Сефардская музыка']



// const S. = styled.div``

export function Filter() {
    const [show, setShowSinger] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [showGenre, setShowGenre] = useState(false)

    return (<S.CenterblockFilter>
    <S.FilterTitle>Искать по:</S.FilterTitle>
    <div>
    <div tabIndex="0" className="filter__button _btn-text" onClick={() => {setShowSinger(!show); setShowYear(false); setShowGenre(false)}}>
      исполнителю
    </div>
    <Singer show={show}/>
    </div>
    <div>
    <div tabIndex="0" className="filter__button button-year _btn-text" onClick={() => {setShowYear(!showYear); setShowSinger(false); setShowGenre(false)}}>
      году выпуска
    </div>
    <Years showYear={showYear}/>
    </div>
    <div>
    <div tabIndex="0" className="filter__button button-genre _btn-text" onClick={() => {setShowGenre(!showGenre); setShowSinger(false); setShowYear(false)}}>жанру</div>
    <Genre showGenre={showGenre} />
    </div>
  </S.CenterblockFilter>)
}

function Genre(showGenre) {
if (showGenre.showGenre) {
    return (
        <S.Show>
        <S.ShowLink>{dataGenre.map(genre => <S.FilterLink key={genre} href="http://"> {genre} </S.FilterLink>)}</S.ShowLink>
        </S.Show>  
    )
}
return (
    <S.NotShow></S.NotShow>
)
}

function Years(showYear) {

    if (showYear.showYear) {
    return (
        <S.Show>
        <S.ShowLink>{dataYears.map(year => <S.FilterLink key={year} href="http://"> {year} </S.FilterLink>)}</S.ShowLink>
        </S.Show>  
        )
    }
    return (
        <S.NotShow></S.NotShow>
    )
}

function Singer(show) {
        if (show.show) {
        return (
            <S.Show>
            <S.ShowLink>{dataSingers.map(name => <S.FilterLink key={name} href="http://"> {name} </S.FilterLink>)}</S.ShowLink>
            </S.Show>  
        )
        }
    return (
        <S.NotShow></S.NotShow>
    )
    
}



