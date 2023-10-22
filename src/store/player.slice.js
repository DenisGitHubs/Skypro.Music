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
        copyData: [], //копия dataDefault для возврата по отключению фильтров
        filterData: [], // массив для работы с фильтрами
        copyNowData: [], //копия текущей dataDefault для работы с поиском
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
        createFilterData(state, action) {
            state.dataDefault = [...new Set(action.payload.Newdata)]
        },
        createCopyData(state, action){
            state.copyData = action.payload.data
        },
        createFilterOther(state, action){
            if(action.payload.dataFilter.length > 0){
            state.dataDefault = action.payload.dataFilter
        }},
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
        comeBackData(state, action) {
            state.dataDefault = action.payload.copyNowData
        },
        copyCurrentData(state, action) {
            state.copyNowData = action.payload.dataDefault
        },
        copyfilterData(state, action) {
            state.filterData = action.payload.data
        },
        createfilterData(state, action) {
            state.filterData = action.payload.dataFilter
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
export const {createFilterData} = playerSlice.actions // изменяем данные DataDefult по фильтру певцов
export const {createCopyData} = playerSlice.actions // сохраняем копию dataDefault для возврата по необходимости
export const {createFilterOther} = playerSlice.actions // изменяем данные DataDefult по остальным фильтрам
export const {comeBackData} = playerSlice.actions // возвращаем изначальный список песен в  DataDefult который был до работы с поиском
export const {copyCurrentData} = playerSlice.actions // сохранияем текущий список песен в  DataDefult перед работой поиска
export const {copyfilterData} = playerSlice.actions // создаем список песен для фильтров
export const {createfilterData} = playerSlice.actions // менянем список песен по фильтрам

export default playerSlice.reducer