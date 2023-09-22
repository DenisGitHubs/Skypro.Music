import { useRef } from 'react';
import { getAllTracks } from '../../Api';
import * as S from './Track.styles'
import {SkeletonBlock} from 'skeleton-elements/react';

function TrackExecutorAlbumTime(props) {
  const load = props.loading

    return (              <S.PlaylistItem>
    <S.PlaylistTrack>
      <S.TrackTitle>
      <TrackTitle />
      <TrackName 
        player={props.player}
        setPlayer={props.setPlayer}
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
      </S.TrackTitle>
      <TrackExecutor executor={props.executor} loading={load}/>
      <TrackAlbum album={props.album} loading={load}/>
      <TrackTime time={props.time} loading={load}/>
    </S.PlaylistTrack>
  </S.PlaylistItem>);
  }
function TrackTitle() {
    return (
        <S.TrackTitleImg>
        <S.TrackTitleSvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </S.TrackTitleSvg>
      </S.TrackTitleImg>
    )
}
function TrackName(props) {
const load = props.loading;

function HandleChoiceSong(props) {
  props.setPlayer(true);
  props.setTrackName(props.track);
  props.setSongerName(props.executor);
  props.setSong(props.src);
  props.setIsPlaying(true)
}
if (!load) {
  return (<div>
    <S.TrackTitleLink onClick={() => HandleChoiceSong(props)}>{props.track}
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

//   const massiveData = [ 
//     {id: 1, track: "Guilt", executor: "Nero", album: "Welcome Reality", time: "4:44"},
//     {id: 2, track: "Elektro", executor: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time: "2:22", secondname: ""},
//     {id: 3, track: "Iam Fire", executor: "Ali Bakgor", album: "Iam Fire", time: "2:22"},
//     {id: 4, track: "Non Stop", secondname: "(Remix)", executor: "Стоункат, Psychopath", album: "Non Stop", time: "4:12"},
//     {id: 5, track: "Run Run", secondname: "(feat. AR/CO)", executor: "Jaded, Will Clarke, AR/CO", album: "Run Run", time: "2:54"},
//     {id: 6, track: "Eyes on Fire", secondname: "(Zeds Dead Remix)", executor: "Blue Foundation, Zeds Dead", album: "Eyes on Fire", time: "5:20"},
//     {id: 7, track: "Mucho Bien", secondname: "(Hi Profile Remix)", executor: "HYBIT, Mr. Black, Offer Nissim, Hi Profile", album: "Mucho Bien", time: "3:41"},
//     {id: 8, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
//     {id: 9, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
//     {id: 10, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"},
//     {id: 11, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"}
// ]

export default function DataSong({loading, player, setPlayer, massiveData, setTrackName, setSongerName, setSong, setDuration, setIsPlaying}) {
  
  return (
    <div>
    {massiveData.map((item) => (
      <TrackExecutorAlbumTime 
      player={player}
       setPlayer={setPlayer}
        key={item.id}
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
             />
    ))}
    </div>

  );
}

