
import { useEffect, useState } from 'react'
import styles from './SearchFilter.module.css'

const dataSingers = ["Nero", "Dynoro, Outwork, Mr. Gee", "Ali Bakgor", "Стоункат, Psychopath", "Jaded, Will Clarke, AR/CO", "minthaze", "Blue Foundation, Zeds Dead", "HYBIT, Mr. Black, Offer Nissim, Hi Profile"]
const dataYears = ['1990', '1995', '1999'];
const dataGenre = ['Фолк-музыка', 'Кантри', 'Джаз', 'Блюз', ' Ритм-н-блюз', 'романс', 'Фламенко', 'Сефардская музыка']
export function Filter() {
    const [show, setShowSinger] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [showGenre, setShowGenre] = useState(false)

    return (<div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>
    <div>
    <div tabIndex="0" className="filter__button button-author _btn-text" onClick={() => {setShowSinger(!show); setShowYear(false); setShowGenre(false)}}>
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
  </div>)
}


function Genre(showGenre) {
    const [visible, setVisible] = useState('');
    useEffect(() => {
        if (showGenre.showGenre) {
            setVisible(styles.show)
        }
        if (!showGenre.showGenre) {
            setVisible(styles.notshow)
        }
    });
return (
    <div className={visible}>
    <div className={styles.show_link}>{dataGenre.map(genre => <a key={genre} href="http://" className={styles.filter_link}> {genre} </a>)}</div>
    </div>  
)
}
function Years(showYear) {
    const [visible, setVisible] = useState('');
    useEffect(() => {
        if (showYear.showYear) {
            setVisible(styles.show)
        }
        if (!showYear.showYear) {
            setVisible(styles.notshow)
        }
    });
return (
    <div className={visible}>
    <div className={styles.show_link}>{dataYears.map(year => <a key={year} href="http://" className={styles.filter_link}> {year} </a>)}</div>
    </div>  
)

}

function Singer(show) {
    const [visible, setVisible] = useState('');
    useEffect(() => {
        if (show.show) {
            setVisible(styles.show)
        }
        if (!show.show) {
            setVisible(styles.notshow)
        }
    });

    return (      
        <div className={visible}>
        <div className={styles.show_link}>{dataSingers.map(name => <a key={name} href="http://" className={styles.filter_link}> {name} </a>)}</div>
        </div>  
    )
}



