import { createSlice } from "@reduxjs/toolkit";
import * as S from '../components/Tracks/Track.styles'
const playerSlice = createSlice({
    name: 'player',
    initialState: {
        flagPlayer: false,
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
        playListIsPlaying: [],
        isShuffle: false,
        bubbleNot: 
                // eslint-disable-next-line react/jsx-no-undef
        <S.TrackTitleSvg alt="music">
        <use xlinkHref="img/icon/sprite.svg#icon-note"> </use>
        </S.TrackTitleSvg>
        ,
        bubbleStopActive: 
        // eslint-disable-next-line react/jsx-no-undef
        <S.BubbleStop></S.BubbleStop>
        ,
        bubbleActive: 
        // eslint-disable-next-line react/jsx-no-undef
        <S.BubbleSvg></S.BubbleSvg>
        
    },
    reducers: {
        togglePlayer(state, action) {
            state.flagPlayer = true
        },
        dataSongs(state, action) {
            state.dataDefault = []
            state.dataDefault = action.payload.tracks
            state.playListIsPlaying = action.payload.tracks;

        },
        shuffle(state, action) {
            if (state.isShuffle) {
                state.isShuffle = false
                state.playListIsPlaying = action.payload.dataDefault

            } else {
                state.isShuffle = true;
                state.playListIsPlaying = action.payload.newShuffle


            }
        }
    },
});

export const {togglePlayer} = playerSlice.actions
export const {dataSongs} = playerSlice.actions
export const {shuffle} = playerSlice.actions
export default playerSlice.reducer