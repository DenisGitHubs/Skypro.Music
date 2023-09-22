import React, { useRef, useState } from 'react';
import '../../App.css';
import * as S from './Player.styles'
export default function Player ({ 
  loading, 
  text, 
  songerName, 
  trackName,
  isPlaying,
  setIsPlaying,
  song,
  allTracks,
  setSong,
  setTrackName,
  setSongerName,
  duration,
  setDuration,
  changeDuration,
  setChangeDuration,
  setIsLoop,
  isLoop

 }) 
  {

const audioRef = useRef(null);
const ProgressRef = useRef(null);
function changeNameInPlayer(newSong) {
  const name = allTracks.find(sSong => sSong.id === newSong).name;
  const album = allTracks.find(sSong => sSong.id === newSong).author;
  setTrackName(name);
  setSongerName(album);
}
function progressBarTime () {
  setInterval(() => {
    setCurrentTime(audioRef.current.currentTime)
  }, 10);
}
function handleBack () {
  const newSong = song - 1;
  const searchTrack = allTracks.find(sSong => sSong.id === newSong)
  if (!searchTrack) {
  const  newSong = allTracks[allTracks.length -1].id
    setSong(newSong);
    changeNameInPlayer(newSong)
  } else {
    setSong(newSong);
    changeNameInPlayer(newSong)
  }
  setIsPlaying(true)

}
function handleNext() {
  const newSong = song + 1;
  const searchTrack = allTracks.find(sSong => sSong.id === newSong)
  if (!searchTrack) {
    const newSong = allTracks[0].id
      setSong(newSong);
      changeNameInPlayer(newSong)
    } else {
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
isLoop ? setIsLoop(false) : setIsLoop(true)
}
  let search = song;
  let srcSong = allTracks.find(sSong => sSong.id === search).track_file
  const togglePlay = isPlaying ? handleStop : handleStart;
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
//
  return (
    <>
    <audio onProgress={() => {LoadData(); setCurrentTime(audioRef.current.currentTime); progressBarTime()}} autoPlay ref={audioRef} src={srcSong}>

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
            <div className="player__btn-shuffle _btn-icon" onClick={(event) => {event.stopPropagation(); alert("еще не реализовано")}}>
              <S.PlayerBtnShuffleSvg alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
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