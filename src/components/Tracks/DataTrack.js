
import * as S from './Track.styles'
import {SkeletonBlock} from 'skeleton-elements/react';
import {activeNewPlaylist, shuffle, togglePlayer} from '../../store/player.slice'
import { useDispatch, useSelector } from 'react-redux';
import { usePostDisLikeMutation, usePostLikeMutation } from '../../QueryApi';
import { useRef, useState } from 'react';
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
      <TrackTime time={props.time} loading={load} id={props.id}/>
    </S.PlaylistTrack>
  </S.PlaylistItem>);
  }
function TrackTitle(props) {

  const bubbleNot= useSelector(state => state.player.bubbleNot)
  const bubbleActive = useSelector(state => state.player.bubbleActive)
  const bubbleStop = useSelector(state => state.player.bubbleStopActive)
const toggleTitle = !props.song.song.song ? bubbleNot : props.song.song.song === props.id ? props.isPlaying.isPlaying.isPlaying ? bubbleActive : bubbleStop : bubbleNot
    return (
        <S.TrackTitleImg id={props.id} >
          {toggleTitle}
        
      </S.TrackTitleImg>
    )
}




function TrackName(props) {
  const Isshuffle = useSelector(state => state.player.isShuffle)
  const dataDefault = useSelector(state => state.player.dataDefault)
const load = props.loading;
const dispatch = useDispatch()

const toggleShuff = () => Isshuffle ? dispatch(shuffle({dataDefault})) : dispatch(activeNewPlaylist())


function HandleChoiceSong(props) {
  
  props.setTrackName.setTrackName.setTrackName(props.track);
  props.setSongerName.setSongerName.setSongerName(props.executor);
  props.setSong.setSong.setSong(props.src);
  props.setIsPlaying.setIsPlaying.setIsPlaying(true)
}


if (!load) {
  return (<div>
    <S.TrackTitleLink onClick={() =>{HandleChoiceSong(props); dispatch(togglePlayer()); toggleShuff()}}>{props.track}
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
  const noLike = <use  xlinkHref="img/icon/sprite.svg#icon-like"/>
const likeIcon = <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
<path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
<path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
</svg>;

  const dataDefault = useSelector(state => state.player.dataDefault)
const [button, setButton] = useState(noLike)

    const [data] = usePostLikeMutation()
    const [disData] = usePostDisLikeMutation()

const searchLike = () => {
  if(dataDefault.length > 12) {
    let email = JSON.parse(localStorage.getItem('Active')).Name
    if(dataDefault.find(sSong => sSong.id === props.id).stared_user.find(e => e.username === email)
    )
  {
    setButton(likeIcon)
    return true}
     else {
      setButton(noLike)
      return false
    }
  }
}
const  handleLike = async () => {
  const answer = JSON.parse(localStorage.getItem('Active')).Access
  const access = [
    {Authorization: `Bearer ${answer}`,
    "content-type": "application/json",},
    {id: props.id}
  ];
  setButton(likeIcon)
  await data(access);
}
const handleDisLike = async () => {
    const answer = JSON.parse(localStorage.getItem('Active')).Access
    const access = [
      {Authorization: `Bearer ${answer}`,
      "content-type": "application/json",},
      {id: props.id}
    ];
    setButton(noLike)
    await disData(access);
}



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

    
    
    // props.loading ? noLike : searchLike() ? likeIcon : noLike
    return (
    <div className="track__time">
    <S.TrackTimeSvg  alt="time" onClick={load ? null : searchLike() ? handleDisLike  : handleLike }>
    { button }
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

