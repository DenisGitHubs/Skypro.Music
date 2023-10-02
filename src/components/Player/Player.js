import React, { useRef, useState } from 'react';
import '../../App.css';
import * as S from './Player.styles'
import { useDispatch, useSelector } from 'react-redux';
import { shuffle } from '../../store/player.slice';
export default function Player ({ 
  loading, 
  text, 
  songerName, 
  trackName,
  isPlaying,
  setIsPlaying,
  song,
  setSong,
  setTrackName,
  setSongerName,
  duration,
  setDuration,
  setIsLoop,
  isLoop

 }) 
  {

    const dataDefault = useSelector(state => state.player.dataDefault)
    const dispatch = useDispatch()
    const isShuffle = useSelector(state => state.player.isShuffle)
    const playListIsPlaying = useSelector(state => state.player.playListIsPlaying)
    

const audioRef = useRef(null);
const ProgressRef = useRef(null);
function changeNameInPlayer(newSong) {
  const name = playListIsPlaying.find(sSong => sSong.id === newSong).name;
  const album = playListIsPlaying.find(sSong => sSong.id === newSong).author;
  setTrackName(name);
  setSongerName(album);
}
function progressBarTime () {
  setInterval(() => {
    if (audioRef.current !== null)
    {
      setCurrentTime(audioRef.current.currentTime)
      return
    }

    return
  }, 10);
}
function handleBack () {
  let index = playListIsPlaying.findIndex(el => el.id === song)
  index = index - 1
  const searchTrack = playListIsPlaying[index];
  if (!searchTrack) {
  const  newSong = playListIsPlaying[playListIsPlaying.length -1].id
    setSong(newSong);
    changeNameInPlayer(newSong)
  } else {
    const newSong = playListIsPlaying[index].id
    setSong(newSong);
    changeNameInPlayer(newSong)
  }
  setIsPlaying(true)

}
function handleNext() {

  let index = playListIsPlaying.findIndex(el => el.id === song)
  index = index + 1
  const searchTrack = playListIsPlaying[index];
    if (!searchTrack) {
    const songId = playListIsPlaying[0].id
      setSong(songId);
      changeNameInPlayer(songId)
    } else {
      const newSong = playListIsPlaying[index].id
      setSong(newSong);
      changeNameInPlayer(newSong)
      
        }
        setIsPlaying(true)
}
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

const handleLoop = () => {
isLoop ? audioRef.current.loop = false : audioRef.current.loop = true;
isLoop ? setIsLoop(false) : setIsLoop(true)}
  let srcSong = playListIsPlaying.find(sSong => sSong.id === song).track_file

  const togglePlay = isPlaying ? handleStop : handleStart;
  const toggleShuffle = isShuffle ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 19 18" fill="none">
  <path d="M19 15L14 12.1132V17.8868L19 15ZM9.66317 12.0833L9.20863 12.2916L9.66317 12.0833ZM6.83683 5.91673L6.3823 6.12505L6.83683 5.91673ZM0 3.5H2.29151V2.5H0V3.5ZM6.3823 6.12505L9.20863 12.2916L10.1177 11.8749L7.29137 5.7084L6.3823 6.12505ZM14.2085 15.5H14.5V14.5H14.2085V15.5ZM9.20863 12.2916C10.1047 14.2466 12.0579 15.5 14.2085 15.5V14.5C12.449 14.5 10.8508 13.4745 10.1177 11.8749L9.20863 12.2916ZM2.29151 3.5C4.05105 3.5 5.64918 4.52552 6.3823 6.12505L7.29137 5.7084C6.39533 3.75341 4.44205 2.5 2.29151 2.5V3.5Z" fill="white"/>
  <path d="M19 3L14 5.88675V0.113249L19 3ZM9.66317 5.91673L9.20863 5.7084L9.66317 5.91673ZM6.83683 12.0833L6.3823 11.8749L6.83683 12.0833ZM0 14.5H2.29151V15.5H0V14.5ZM6.3823 11.8749L9.20863 5.7084L10.1177 6.12505L7.29137 12.2916L6.3823 11.8749ZM14.2085 2.5H14.5V3.5H14.2085V2.5ZM9.20863 5.7084C10.1047 3.75341 12.0579 2.5 14.2085 2.5V3.5C12.449 3.5 10.8508 4.52552 10.1177 6.12505L9.20863 5.7084ZM2.29151 14.5C4.05105 14.5 5.64918 13.4745 6.3823 11.8749L7.29137 12.2916C6.39533 14.2466 4.44205 15.5 2.29151 15.5V14.5Z" fill="white"/>
  </svg> : <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />;
  const togglePlayIcon = isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
  <rect width="5" height="19" fill="#D9D9D9"/>
  <rect x="10" width="5" height="19" fill="#D9D9D9"/>
  </svg> : <use xlinkHref="img/icon/sprite.svg#icon-play" />;
const toggleLoop = isLoop ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12.8" viewBox="0 0 20 18" fill="none">
<path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z" fill="white"/>
<path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z" fill="white"/>
</svg> : <use xlinkHref="img/icon/sprite.svg#icon-repeat" />;

    const [currentTime, setCurrentTime] = useState(0);
    const [playerTime, setPlayerTime] = useState(0)
    const [volumeSong, setVolumeSong] = useState(0.5)
    
    function LoadData() {
      //total track time
      setDuration(audioRef.current.duration)
      let totalSec = TotalTimeSec();
      let totalMin = parseInt((duration/60));

      setPlayerTime(`${totalMin}:${totalSec}`)
      audioRef.current.volume = volumeSong
    }


    function TotalTimeSec() {
        let time = duration % 60;
        if(time < 10) {
          time = Math.trunc(time)
          return `0${time}`
        } else {
          time = Math.trunc(time)
          return time
        }
    }

    function shuffleTracks() {
      if (isShuffle) {
        dispatch(shuffle({dataDefault}))
      } else {
        const newList = []
        newList.push(dataDefault.map((item) => (
            {
              id: item.id,
              name: item.name,
              author: item.author,
              duration_in_seconds: item.duration_in_seconds,
              genre: item.genre,
              logo: item.logo,
              release_date: item.release_date,
              track_file: item.track_file,
              album: item.album
        }
        )))
        function random(n) {
          return Math.floor(Math.random() * Math.floor(n));
        }
        function shuffleMass (arr) {
          for (var i = 0; i < arr.length; i++) {
            var j = random(arr.length);
            var k = random(arr.length);
            var t = arr[j];
            arr[j] = arr[k];
            arr[k] = t;
          }
          return arr;
        }
        let newShuffle = shuffleMass (newList[0]);
        dispatch(shuffle({newShuffle}))
      }
    }

    function ProgressBarTime() {
      const changeMin = parseInt((currentTime/60));
      const changeSec = ChangeSecFun()
      function  ChangeSecFun() {
        let time = currentTime % 60;
        if (time < 10) {
          time = Math.trunc(time)
          return `0${time}`
        } else {
          time = Math.trunc(time)
          return time
        }
      }

      return (
        <S.TrackTimeText >{`${changeMin}:${changeSec} / ${playerTime}`}</S.TrackTimeText>
      )
    }
function CurrentTime(time) {
  if (time) {
    setCurrentTime(time)
    return
  } else {
    return
  }

}

  return (
    <>
    <audio onPlaying={() => {LoadData(); CurrentTime(audioRef.current.currentTime); progressBarTime()}} autoPlay ref={audioRef} src={srcSong}>

  </audio>
    <S.Bar>
    <S.BarContent>
    <ProgressBarTime  />
      <S.StyledProgressInput
      ref={ProgressRef}
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => {setCurrentTime(event.target.value);audioRef.current.currentTime = event.target.value}}
        $color="#ff0000"
      />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <S.PlayerControls>
            <S.PlayerBtnPrev onClick={() => handleBack()}>
              <S.PlayerBtnPrevSvg alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev" />
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay onClick={togglePlay}>
              <S.PlayerBtnPlaySvg alt="play" >
                {togglePlayIcon}
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext onClick={() => handleNext()}>
              <S.PlayerBtnNextSvg alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next" />
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <div className="player__btn-repeat _btn-icon" onClick={handleLoop}>
              <S.PlayerBtnRepeatSvg alt="repeat">
                {toggleLoop}
              </S.PlayerBtnRepeatSvg>
            </div>
            <div className="player__btn-shuffle _btn-icon" onClick={() => shuffleTracks({dataDefault})}>
              <S.PlayerBtnShuffleSvg alt="shuffle">
                {toggleShuffle}
              </S.PlayerBtnShuffleSvg>
            </div>
          </S.PlayerControls>
          <S.PlayerTrackPlay>
            <S.TrackPlayContain>
              <S.TrackPlayImage>
                <S.TrackPlaySvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackPlaySvg>
              </S.TrackPlayImage>
              <S.TrackPlayAuthor>
                <a className={!loading ? "track-play__author-link" : "track-play__author-link skeleton-block skeleton-effect-fade"} href="http://">
                  {loading ? text : `${trackName}`}
                </a>
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum>
                <a className={!loading ? "track-play__album-link" : "track-play__album-link skeleton-block skeleton-effect-fade"} href="http://">
                {loading ? text : `${songerName}`}
                </a>
              </S.TrackPlayAlbum>
            </S.TrackPlayContain>
            <S.TrackPlayLikeDis>
              <div className="track-play__like _btn-icon">
                <svg className="track-play__like-svg" alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
              </div>
              <div className="track-play__dislike _btn-icon">
                <svg className="track-play__dislike-svg" alt="dislike">
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                </svg>
              </div>
            </S.TrackPlayLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <S.VolumeContent>
            <S.VolumeImage>
              <S.VolumeSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
              </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress>
              <input
                className="volume__progress-line _btn"
                type="range"
                name="range"
                max={1}
                min={0}
                step={0.1}
                value={volumeSong}
                onChange={(event) => {setVolumeSong(event.target.value); audioRef.current.volume = event.target.value}}
              />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  </S.Bar>
  </>
  )
}