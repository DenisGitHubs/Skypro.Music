/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './RightSideBar.module.css'
export default function RightSidebar({loading}) {
    return (
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
        <SidebarItemFun src="img/playlist01.png" srcAlt="img/playlistUnknown.png" loading={loading} />
        <SidebarItemFun src="img/playlist02.png" srcAlt="img/playlistUnknown.png" loading={loading} />
        <SidebarItemFun src="img/playlist03.png" srcAlt="img/playlistUnknown.png" loading={loading} />
</div>
</div>
    );
  }

  function SidebarItemFun(props) {
    const load = props.loading;
    const src = props.src
    const srcAlt = props.srcAlt
    return (
        <div className={styles.sidebar__item}>
        <a className={styles.sidebar__link} href="#">
          <img
            className={styles.sidebar__img}
            src={load ? srcAlt : src}
            alt="day's playlist"
          />
        </a>
      </div>
    );
  }