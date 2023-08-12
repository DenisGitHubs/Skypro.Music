
import styles from './DataTrack.module.css'
function TrackExecutorAlbumTime(props) {
    return (              <div className={styles.playlist__item}>
    <div className={styles.playlist__track}>
      <div className={styles.track__title}>
      <TrackTitle />
      <TrackName track={props.track} secondname={props.secondname} />
      </div>
      <TrackExecutor executor={props.executor}/>
      <TrackAlbum album={props.album}/>
      <TrackTime time={props.time}/>
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
    return (
    <div className="track__title-text">
    <a className={styles.track__title_link} href="http://">
    {props.track} <span className="track__title-span"> {props.secondname}</span>
    </a>
  </div>
  )
}

function TrackExecutor(props) {
    return (
    <div className={styles.track__author}>
    <a className={styles.track__author_link} href="http://">
    {props.executor}
    </a>
  </div>
  )
}
function TrackAlbum(props) {
    return (
    <div className={styles.track__album}>
    <a className={styles.track__album_link} href="http://">
    {props.album}
    </a>
  </div>
  )
}
function TrackTime(props) {
    return (
    <div className="track__time">
    <svg className={styles.track__time_svg} alt="time">
      <use xlinkHref="img/icon/sprite.svg#icon-like" />
    </svg>
    <span className={styles.track__time_text}>{props.time}</span>
  </div>
  )
}

export default function DataSong() {
    return (
      <div>
        <TrackExecutorAlbumTime track="Guilt" executor="Nero" album="Welcome Reality" time="4:44" />
        <TrackExecutorAlbumTime track="Elektro" executor="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
        <TrackExecutorAlbumTime track="I’m Fire" executor="Ali Bakgor" album="I’m Fire" time="2:22" />
        <TrackExecutorAlbumTime track="Non Stop" secondname="(Remix)" executor="Стоункат, Psychopath" album="Non Stop" time="4:12" />
        <TrackExecutorAlbumTime track="Run Run" secondname="(feat. AR/CO)" executor="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" />
        <TrackExecutorAlbumTime track="Eyes on Fire" secondname="(Zeds Dead Remix)" executor="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" />
        <TrackExecutorAlbumTime track="Mucho Bien" secondname="(Hi Profile Remix)" executor="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" />
        <TrackExecutorAlbumTime track="Knives n Cherries" executor="minthaze" album="Captivating" time="1:48" />
      </div>
    );
  }