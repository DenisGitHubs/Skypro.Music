import { createSlice } from "@reduxjs/toolkit";
import * as S from '../components/Tracks/Track.styles'
const playerSlice = createSlice({
    name: 'player',
    initialState: {
        user: [], // текуший пользователь
        loadingFromApi: false, // флаг загрузки данных из API
        pageName: 'main',  // название текущей страницы для Layout
        songIsPlaying: '', // текущая песня в плеере
        flagPlayer: false, // флаг инициализации плеера
        playMusic: false, // флаг состояния: играет музыка или на паузе
        isShuffle: false, // Флаг состояния включения/выключения режима перемешивания
        playListIsPlaying: [], //плейлист в плеере
        isLoop: false, // флаг включения перемещивания
        copyData: [], //копия всех песен для работы с фильтрами
        dataFilterByGenres: [], // массив песен, полученный в результате работы фильтра по жанрам
        dataFilterBySingers: [], // массив песен, полученный в результате работы фильтра по певцам
        copyDataBeforeSearch: [], //копия текущей dataDefault для работы с поиском !!!!!
        dataDefault: [ 
            {id: 1, track: "Guilt", executor: "Nero", album: "Welcome Reality", time: "4:44"},
            {id: 2, track: "Elektro", executor: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time: "2:22", secondname: ""},
            {id: 3, track: "Iam Fire", executor: "Ali Bakgor", album: "Iam Fire", time: "2:22"},
            {id: 4, track: "Non Stop", secondname: "(Remix)", executor: "Стоункат, Psychopath", album: "Non Stop", time: "4:12"},
            {id: 5, track: "Run Run", secondname: "(feat. AR/CO)", executor: "Jaded, Will Clarke, AR/CO", album: "Run Run", time: "2:54"},
            {id: 6, track: "Eyes on Fire", secondname: "(Zeds Dead Remix)", executor: "Blue Foundation, Zeds Dead", album: "Eyes on Fire", time: "5:20"},
            {id: 7, track: "Mucho Bien", secondname: "(Hi Profile Remix)", executor: "HYBIT, Mr. Black, Offer Nissim, Hi Profile", album: "Mucho Bien", time: "3:41"},
            {id: 8, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
            {id: 9, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
            {id: 10, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
            {id: 11, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
            {id: 12, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"}
        ],
        
        bubbleNot: 
                // eslint-disable-next-line react/jsx-no-undef
        <S.TrackTitleSvg alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"> </use>
        </S.TrackTitleSvg> // состояние без bubble
        ,
        bubbleStopActive: 
        // eslint-disable-next-line react/jsx-no-undef
        <S.BubbleStop></S.BubbleStop> //состояние  bubble когда музыка на стопе
        ,
        bubbleActive: 
        // eslint-disable-next-line react/jsx-no-undef
        <S.BubbleSvg></S.BubbleSvg> //состояние  bubble когда музыка на играет
        
    },
    reducers: {
        changeUser(state, action){
            state.user = action.payload.user
            localStorage.setItem('userName', JSON.stringify(state.user.Name))
            localStorage.setItem('Access', JSON.stringify(state.user.Access))
            localStorage.setItem('Refresh', JSON.stringify(state.user.Refresh))
        },
        mainListFromApi(state, action){
            state.dataDefault = action.payload.data
        },
        setLoadingFromApi(state, action) {
            state.loadingFromApi = action.payload.dataLoading
        },
        setPageName(state, action) {
            state.pageName = action.payload.namePage
        },
        deleteUser(state) {
            state.user = []
        },
        setSongIsPlaying(state, action) {
            state.songIsPlaying = action.payload.handleSong
        },
        setFlagPlayer(state) {
            state.flagPlayer = true
        },
        togglePlayer(state, action) {
            state.playMusic = action.payload.dataTogglePlayer
        },
        toggleShaffle(state, action) {
            state.isLoop = action.payload.data
        },
        dataFavorite(state, action){
            state.dataDefault = action.payload.data
        },
        categoryCreateList(state, action){
            state.dataDefault = action.payload.dataCategory
        },
        createCopyData(state, action){
            state.copyData = action.payload.data
        },
        dataSongs(state, action) {
            state.dataDefault = action.payload.tracks
        },
        activeNewPlaylist(state, action) {
            state.playListIsPlaying = state.dataDefault;
        },
        activePlaylistFromMyTracks(state, action){
            state.playListIsPlaying = action.payload.data
            state.dataDefault = action.payload.data
        },
        shuffle(state, action) {
            if (state.isShuffle) {
                state.isShuffle = false
                state.playListIsPlaying = action.payload.data
            } else {
                state.isShuffle = true;
                state.playListIsPlaying = action.payload.newShuffle
                
            }
        },
        copyCurrentData(state, action) {
            state.copyDataBeforeSearch = action.payload.dataDefault
        },
        createDataFilterByGenres(state, action) {
            state.dataFilterByGenres = action.payload.data
        },
        createDataFilterBySingers(state, action) {
            state.dataFilterBySingers = action.payload.data
        },
        createDataSortByDate(state, action) {
            state.dataDefault = action.payload.data
        },
        createDataSortByAllFilters(state, action) {
            if(state.dataFilterByGenres.length === 0 && state.dataFilterBySingers.length !== 0){
                state.dataDefault = state.dataFilterBySingers
                state.copyDataBeforeSearch = state.dataFilterBySingers
                return
            }
            if(state.dataFilterBySingers.length === 0 && state.dataFilterByGenres.length !== 0){
                state.dataDefault = state.dataFilterByGenres
                state.copyDataBeforeSearch = state.dataFilterByGenres
                return
            }
            if(state.dataFilterByGenres.length === 0 && state.dataFilterBySingers.length === 0) {
                state.dataDefault = state.copyData
                state.copyDataBeforeSearch = state.copyData
                return
            }
            let result = state.dataFilterBySingers.filter(function(v) {
                return state.dataFilterByGenres.some(function(v2) {
                return v.id === v2.id && v.item === v2.item})
            })

            state.dataDefault = result
            state.copyDataBeforeSearch = result
        },
        createDataBySearch(state, action) {
            if(action.payload.data.length > 0){
                state.dataDefault = action.payload.data
                return
            }
            if(action.payload.data.length === 0) {
                state.dataDefault = []
                return
            }
        },
        deleteAllFilters(state, action) {
            state.dataFilterByGenres = []
            state.dataFilterBySingers = []
        },
    },
});

export const {activeNewPlaylist} = playerSlice.actions
export const {dataSongs} = playerSlice.actions
export const {shuffle} = playerSlice.actions
export const {activePlaylistFromMyTracks} = playerSlice.actions
//
export const {changeUser} = playerSlice.actions // добавление user после регистрации или логирования
export const {mainListFromApi} = playerSlice.actions // замена мок данных на список песен из API для главной страницы
export const {setLoadingFromApi} = playerSlice.actions // флаг загрузки данных из API
export const {setPageName} = playerSlice.actions // изменение названия страницы для перенапрваленмя в Layout
export const {deleteUser} = playerSlice.actions //удаление user из store. для выхода
export const {setSongIsPlaying} = playerSlice.actions //ручное добавление песни в плеер
export const {setFlagPlayer} = playerSlice.actions // включение плеера
export const {togglePlayer} = playerSlice.actions // вкл/выкл проигрывания музыки 
export const {toggleShaffle} = playerSlice.actions // вкл/выкл флага перемешивания
export const {dataFavorite} = playerSlice.actions // добавляет полученные любимые песни в DataDefault
export const {categoryCreateList} = playerSlice.actions // добавляет полученные песни по категориям в список DataDefault
export const {createCopyData} = playerSlice.actions // сохраняем копию dataDefault для возврата по необходимости
export const {createDataFilterByGenres} = playerSlice.actions // создаем список песен отобранных по фильтру жанров
export const {createDataFilterBySingers} = playerSlice.actions // создаем список песен отобранных по фильтру певцов
export const {createDataSortByDate} = playerSlice.actions // добавляем список песен из отображенных, сортированных по дате
export const {createDataSortByAllFilters} = playerSlice.actions // добавляем список отфильтрованых песен в отображаемый список
export const {copyCurrentData} = playerSlice.actions // сохранияем текущий список песен в  DataDefult перед работой поиска
export const {createDataBySearch} = playerSlice.actions // добавляем список песен отфильтрованный через поисковик
export const {deleteAllFilters} = playerSlice.actions // отчищаем фильтра


export default playerSlice.reducer