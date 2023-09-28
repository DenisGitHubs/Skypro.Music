
import * as S from './Track.styles'
import {SkeletonBlock} from 'skeleton-elements/react';
import {togglePlayer} from '../../store/player.slice'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
function TrackExecutorAlbumTime(props) {

  const load = props.loading

    return (              <S.PlaylistItem>
    <S.PlaylistTrack>
      <S.TrackTitle>
      <TrackTitle id={props.id} song={props.song} isPlaying={props.isPlaying}/>
      <TrackName 
        track={props.track}
        secondname={props.secondname}
          loading={load}
          setTrackName={props.setTrackName}
          setSongerName={props.setSongerName}
          executor={props.executor}
          setSong={props.setSong}
          src={props.src}
          setDuration={props.setDuration}
          time={props.time}
          setIsPlaying={props.setIsPlaying}
          />
      </S.TrackTitle >
      <TrackExecutor executor={props.executor} loading={load}/>
      <TrackAlbum album={props.album} loading={load}/>
      <TrackTime time={props.time} loading={load}/>
    </S.PlaylistTrack>
  </S.PlaylistItem>);
  }
function TrackTitle(props) {
  // const [songBubble, setSongBubble] = useState(props.song)
  // const bubbleNot = 
  // <>
  // <S.TrackTitleSvg alt="music">
  // <use xlinkHref="img/icon/sprite.svg#icon-note"> </use>
  // </S.TrackTitleSvg>
  // </>
  // const bubbleActive = <S.BubbleSvg></S.BubbleSvg>
  // const bubbleStop = <S.BubbleStop></S.BubbleStop>
  const bubbleNot= useSelector(state => state.player.bubbleNot)
  const bubbleActive = useSelector(state => state.player.bubbleActive)
  const bubbleStop = useSelector(state => state.player.bubbleStopActive)
const toggleTitle = !props.song ? bubbleNot : props.song === props.id ? props.isPlaying ? bubbleActive : bubbleStop : bubbleNot
// console.log(toggleTitle);
  // const toggleTitle = () => {
  //   if (songBubble) {
  //     if (songBubble === props.id) {
  //       if(props.isPlaying){
  //         return bubbleActive
  //       }
  //       if(!props.isPlaying){
  //         return bubbleStop
  //       }


  //     }
  //   } else {
  //     return bubbleNot
  //   }
  // }

    return (
        <S.TrackTitleImg id={props.id} >
          {toggleTitle}
        
      </S.TrackTitleImg>
    )
}
function TrackName(props) {
const load = props.loading;
const dispatch = useDispatch()

function HandleChoiceSong(props) {
  props.setTrackName(props.track);
  props.setSongerName(props.executor);
  props.setSong(props.src);
  props.setIsPlaying(true)
}
if (!load) {
  return (<div>
    <S.TrackTitleLink onClick={() =>{HandleChoiceSong(props); dispatch(togglePlayer())}}>{props.track}
    <S.TrackTitleSpan>{props.secondname} </S.TrackTitleSpan>
    </S.TrackTitleLink>
  </div>
  )
}
    return (
    <SkeletonBlock effect="fade" tag="div">
    <S.TrackTitleLink href="http://">
    <S.TrackTitleSpan></S.TrackTitleSpan>
    </S.TrackTitleLink>
    </SkeletonBlock>
  )
}

function TrackExecutor(props) {
  const load = props.loading;

  if (!load) { 
    return (
    <S.TrackAuthor>
    <S.TrackAuthorLink href="http://">
    {props.executor}
    </S.TrackAuthorLink>
  </S.TrackAuthor>
  )
  }
    return (
    <S.TrackAuthor>
    <SkeletonBlock effect='fade' tag='div' href="http://">
    </SkeletonBlock>
  </S.TrackAuthor>
  )
}
function TrackAlbum(props) {
  const load = props.loading;
  if (!load) {
    return (
      <S.TrackAlbum>
      <S.AlbumLink href="http://">
      {props.album}
      </S.AlbumLink>
    </S.TrackAlbum>
    )
  }
    return (
    <S.TrackAlbum>
    <SkeletonBlock effect='fade' tag='div' href="http://">
    </SkeletonBlock>
  </S.TrackAlbum>
  )
}
function TrackTime(props) {
  const load = props.loading;
  const min = parseInt((props.time/60));
  const sec = time();
  function time () {
    const time = props.time % 60;
    if (time < 9) {
      return `0${time}`
    } else {
      return time
    }
  }

    return (
    <div className="track__time">
    <S.TrackTimeSvg alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-like" />
    </S.TrackTimeSvg>
    <S.TrackTimeText >{load ? "0:00" : `${min}:${sec}`}</S.TrackTimeText>
  </div>
  )
}


export default function DataSong({loading, setTrackName, setSongerName, setSong, setDuration, setIsPlaying, song, isPlaying}) {
  const dataDefault = useSelector(state => state.player.dataDefault)

  return (
    <div>
    {dataDefault.map((item) => (
      <TrackExecutorAlbumTime 
      isPlaying={isPlaying}
      song={song}
        id={item.id}
         track={item.name}
          executor={item.author}
           album={item.album}
            time={item.duration_in_seconds}
             loading={loading}
             setTrackName={setTrackName}
             setSongerName={setSongerName}
             setSong={setSong}
             src={item.id}
             setDuration={setDuration}
             setIsPlaying={setIsPlaying}
             key={item.id}
             />
    ))}
    </div>

  );
}

