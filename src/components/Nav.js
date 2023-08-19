/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styles from './Nav.module.css'


  function NavHtml(props) {
    return (
        <li className={styles.menu__item}>
        <a href="#" className={styles.menu__link}>
          {props.text}
        </a>
      </li>
    );
  }


  export const Nav = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisibility = () => setVisible(!visible);
  
    return (
      <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src="img/logo.png" alt="logo" />
      </div>
      <div className={styles.nav__burger} onClick={toggleVisibility}>
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </div>
      {visible && (
        <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
                <NavHtml text="Главное" />
                <NavHtml text="Мой плейлист" />
                <NavHtml text="Войти" />
                </ul>
                </div>
        )}
        </nav>

    );
  };
