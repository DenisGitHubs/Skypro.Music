

import styles from './DataTrack.module.css'


function TrackExecutorAlbumTime(props) {
  const load = props.loading
    return (              <div className={styles.playlist__item}>
    <div className={styles.playlist__track}>
      <div className={styles.track__title}>
      <TrackTitle />
      <TrackName track={props.track} secondname={props.secondname} loading={load}/>
      </div>
      <TrackExecutor executor={props.executor} loading={load}/>
      <TrackAlbum album={props.album} loading={load}/>
      <TrackTime time={props.time} loading={load}/>
    </div>
  </div>);
  }
function TrackTitle() {

    return (
        <div className={styles.track__title_image}>
        <svg className={styles.track__title_svg} alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
    )
}
function TrackName(props) {
const load = props.loading;
const style = "track__title-text "
const text = "";
    return (
    <div className={!load ? style : style + "skeleton-block skeleton-text skeleton-effect-fade"}>
    <a className={styles.track__title_link} href="http://">{load ? text : props.track}
    <span className="track__title-span">{load ? text : props.secondname} </span>
    </a>
  </div>
  )
}

function TrackExecutor(props) {
  const load = props.loading;
  const style = styles.track__author_link;
  const text = ""
    return (
    <div className={styles.track__author}>
    <a className={!load ? style : style + "track__title-span skeleton-block skeleton-text skeleton-effect-fade"} href="http://">
    {load ? text : props.executor}
    </a>
  </div>
  )
}
function TrackAlbum(props) {
  const load = props.loading;
  const style =styles.track__album_link;
  const text = ""
    return (
    <div className={styles.track__album}>
    <a className={!load ? style : style + " skeleton-block skeleton-text skeleton-effect-fade"} href="http://">
    {load ? text : props.album}
    </a>
  </div>
  )
}
function TrackTime(props) {
  const load = props.loading;
  const text = "0:00"
    return (
    <div className="track__time">
    <svg className={styles.track__time_svg} alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-like" />
    </svg>
    <span className={styles.track__time_text}>{load ? text : props.time}</span>
  </div>
  )
}

export default function DataSong({loading}) {

    return (
      <div>
        <TrackExecutorAlbumTime track="Guilt" executor="Nero" album="Welcome Reality" time="4:44" loading={loading} />
        <TrackExecutorAlbumTime track="Elektro" executor="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" loading={loading} />
        <TrackExecutorAlbumTime track="Iam Fire" executor="Ali Bakgor" album="I’m Fire" time="2:22" loading={loading} />
        <TrackExecutorAlbumTime track="Non Stop" secondname="(Remix)" executor="Стоункат, Psychopath" album="Non Stop" time="4:12" loading={loading} />
        <TrackExecutorAlbumTime track="Run Run" secondname="(feat. AR/CO)" executor="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" loading={loading} />
        <TrackExecutorAlbumTime track="Eyes on Fire" secondname="(Zeds Dead Remix)" executor="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" loading={loading} />
        <TrackExecutorAlbumTime track="Mucho Bien" secondname="(Hi Profile Remix)" executor="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" loading={loading} />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" loading={loading} />
      </div>
    );
  }