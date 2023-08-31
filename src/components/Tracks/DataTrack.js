import * as S from './Track.styles'
import {SkeletonBlock} from 'skeleton-elements/react';

function TrackExecutorAlbumTime(props) {
  const load = props.loading
    return (              <S.PlaylistItem>
    <S.PlaylistTrack>
      <S.TrackTitle>
      <TrackTitle />
      <TrackName track={props.track} secondname={props.secondname} loading={load}/>
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
if (!load) {
  return (<div>
    <S.TrackTitleLink href="http://">{props.track}
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
    return (
    <div className="track__time">
    <S.TrackTimeSvg alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-like" />
    </S.TrackTimeSvg>
    <S.TrackTimeText >{load ? "0:00" : props.time}</S.TrackTimeText>
  </div>
  )
}

// export default function DataSong({loading}) {

//   return (
//     <div>
//       <TrackExecutorAlbumTime track="Guilt" executor="Nero" album="Welcome Reality" time="4:44" loading={loading} />
//       <TrackExecutorAlbumTime track="Elektro" executor="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" loading={loading} />
//       <TrackExecutorAlbumTime track="Iam Fire" executor="Ali Bakgor" album="I’m Fire" time="2:22" loading={loading} />
//       <TrackExecutorAlbumTime track="Non Stop" secondname="(Remix)" executor="Стоункат, Psychopath" album="Non Stop" time="4:12" loading={loading} />
//       <TrackExecutorAlbumTime track="Run Run" secondname="(feat. AR/CO)" executor="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" loading={loading} />
//       <TrackExecutorAlbumTime track="Eyes on Fire" secondname="(Zeds Dead Remix)" executor="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" loading={loading} />
//       <TrackExecutorAlbumTime track="Mucho Bien" secondname="(Hi Profile Remix)" executor="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" loading={loading} />
//       <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
//       <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
//       <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
//       <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
//     </div>
//   );
// }


  /// TO DO
  const massiveData = [ 
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
    {id: 11, track: "Knives n Cherries", executor: "minthaze", album: "Captivating", time: "1:48"}
]

export default function DataSong({loading}) {

  return (
    <div>
    {massiveData.map((item) => (
      <TrackExecutorAlbumTime key={item.id} track={item.track} executor={item.executor} album={item.album} time={item.time} loading={loading} />
    ))}
    </div>

  );
}

