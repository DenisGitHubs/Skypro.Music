
import * as S from './Track.styles'
import {SkeletonBlock} from 'skeleton-elements/react';
import {activeNewPlaylist, shuffle, togglePlayer, setSongIsPlaying, setFlagPlayer, changeUser } from '../../store/player.slice'
import { useDispatch, useSelector } from 'react-redux';
import { usePostDisLikeMutation, usePostLikeMutation } from '../../API/tracks.api';
import { useEffect, useState } from 'react';
import { GetNewTokens } from '../../API/user.api';

export default function DataSong() {
  const dataDefault = useSelector(state => state.player.dataDefault)
  return (
    <div>
    {dataDefault.map((item) => (
      <TrackExecutorAlbumTime 
      item={item}
      key={item.id}
        />
    ))}
    </div>
  );
}

function TrackExecutorAlbumTime(props) {
  const load = useSelector(state => state.player.loadingFromApi)
    return ( 
  <S.PlaylistItem>
    <S.PlaylistTrack>
      <S.TrackTitle>
      <TrackTitle id={props.item.id} />
      <TrackName 
          item={props.item}
          loading={load}
          />
      </S.TrackTitle >
      <TrackExecutor item={props.item} loading={load}/>
      <TrackAlbum item={props.item} loading={load}/>
      <TrackTime item={props.item} loading={load}/>
    </S.PlaylistTrack>
  </S.PlaylistItem>);
  }
function TrackTitle(props) {
  
  const songIsPlaying= useSelector(state => state.player.songIsPlaying)
  const playMusic= useSelector(state => state.player.playMusic)
  const bubbleNot= useSelector(state => state.player.bubbleNot)
  const bubbleActive = useSelector(state => state.player.bubbleActive)
  const bubbleStop = useSelector(state => state.player.bubbleStopActive)

  const toggleTitle = !songIsPlaying.id ? bubbleNot : songIsPlaying.id === props.id ? playMusic ? bubbleActive : bubbleStop : bubbleNot
    return (
        <S.TrackTitleImg id={props.id} >
          {toggleTitle}
      </S.TrackTitleImg>
    )
}

function TrackName(props) {
  const dispatch = useDispatch()
  const Isshuffle = useSelector(state => state.player.isShuffle)
  const data = useSelector(state => state.player.dataDefault)
const load = props.loading;

const toggleShuff = () => Isshuffle ? dispatch(shuffle({data})) : dispatch(activeNewPlaylist())


function HandleChoiceSong(props) {
  const handleSong = props.item
  dispatch(setSongIsPlaying({handleSong}))
  dispatch(setFlagPlayer())

}


if (!load) {
  const dataTogglePlayer = true
  return (<div>
    <S.TrackTitleLink onClick={() =>{HandleChoiceSong(props); dispatch(togglePlayer({dataTogglePlayer})); toggleShuff()}}>{props.item.name}
    <S.TrackTitleSpan> </S.TrackTitleSpan>
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
    <S.TrackAuthorLink>
    {props.item.author}
    </S.TrackAuthorLink>
  </S.TrackAuthor>
  )
  }
    return (
    <S.TrackAuthor>
    <SkeletonBlock effect='fade' tag='div'>
    </SkeletonBlock>
  </S.TrackAuthor>
  )
}
function TrackAlbum(props) {
  const load = props.loading;
  if (!load) {
    return (
      <S.TrackAlbum>
      <S.AlbumLink >
      {props.item.album}
      </S.AlbumLink>
    </S.TrackAlbum>
    )
  }
    return (
    <S.TrackAlbum>
    <SkeletonBlock effect='fade' tag='div'>
    </SkeletonBlock>
  </S.TrackAlbum>
  )
}
function TrackTime(props) {
  const load = props.loading;
  const min = parseInt((props.item.duration_in_seconds/60));
  const sec = time();
    const noLike = <use  xlinkHref="img/icon/sprite.svg#icon-like"/>
    const likeIcon = <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
<path d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z" fill="#B672FF"/>
<path d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052" stroke="#B672FF"/>
                      </svg>;
    const pageName = useSelector(state => state.player.pageName)
    const dataDefault = useSelector(state => state.player.dataDefault)
    const [button, setButton] = useState(noLike)
    const [flag, setFlag] = useState(false)
    const [data, {error: createError, isError: createNewError,}] = usePostLikeMutation()
    const [disData, {error, isError}] = usePostDisLikeMutation()
    const dispatch = useDispatch()

    function searchLike () {
      if(load) {
        return
      }
      if(!load){
        
        let email = JSON.parse(localStorage.getItem('userName'))
        if(dataDefault.find(sSong => sSong.id === props.item.id).stared_user.find(e => e.username === email)
        ){
          setFlag(true)
          setButton(likeIcon)
        return
        } else {
          setFlag(false)
          setButton(noLike)
          return
        }
      }
    }
    async function refreshToken() {
      const refresh = JSON.parse(localStorage.getItem('Refresh'));
      const user = await GetNewTokens({refresh})
      dispatch(changeUser({user}))
      if(createNewError){
        handleLike()
      }
      if(isError){
        handleDisLike()
      }
    }
    useEffect(() => {
      if(pageName === 'favorites') {
        setFlag(true)
        setButton(likeIcon)
        return
      }
      searchLike()
    }, [load]);
    useEffect(() => {
      if(createNewError) {
        if(createError.status === 401){
          refreshToken()
        }
        
      }
      if(isError) {
        if(error.status === 401){
          refreshToken()
        }
        
      }
    }, [createNewError, isError, createError, error]);
const  handleLike = async () => {
  const answer = JSON.parse(localStorage.getItem('Access'))
  const access = [
    {Authorization: `Bearer ${answer}`,
    "content-type": "application/json",},
    {id: props.item.id}
  ];
  await data(access);
  setButton(likeIcon)
  setFlag(true)
}

const handleDisLike = async () => {
    const answer = JSON.parse(localStorage.getItem('Access'))
    const access = [
      {Authorization: `Bearer ${answer}`,
      "content-type": "application/json",},
      {id: props.item.id}
    ];
    await disData(access)
      setButton(noLike)
      setFlag(false)
}

const toggleLike = async () => {
  if (flag) {
    handleDisLike()
  } if (!flag) { 
    handleLike()
  }
}


  function time () {
    const time = props.item.duration_in_seconds % 60;
    if (time < 9) {
      return `0${time}`
    } else {
      return time
    }
  }

    return (
    <div className="track__time">
    <S.TrackTimeSvg  alt="time" onClick={load ? null : toggleLike }>
    {button}
    </S.TrackTimeSvg>
    <S.TrackTimeText >{load ? "0:00" : `${min}:${sec}`}</S.TrackTimeText>
  </div>
  )
}




