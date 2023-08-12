/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Nav.module.css'
export default function Nav() {
    return (
<ul className={styles.menu__list}>
        <NavHtml text="Главное" />
        <NavHtml text="Мой плейлист" />
        <NavHtml text="Войти" />
        </ul>
    );
  }

  function NavHtml(props) {
    return (
        <li className={styles.menu__item}>
        <a href="#" className={styles.menu__link}>
          {props.text}
        </a>
      </li>
    );
  }