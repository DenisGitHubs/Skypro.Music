/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './RightSideBar.module.css'
export default function RightSidebar() {
    return (
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
        <SidebarItemFun src="img/playlist01.png" />
        <SidebarItemFun src="img/playlist02.png" />
        <SidebarItemFun src="img/playlist03.png" />
</div>
</div>
    );
  }

  function SidebarItemFun(props) {
    return (
        <div className={styles.sidebar__item}>
        <a className={styles.sidebar__link} href="#">
          <img
            className={styles.sidebar__img}
            src={props.src}
            alt="day's playlist"
          />
        </a>
      </div>
    );
  }