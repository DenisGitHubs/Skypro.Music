
import { useState } from 'react';
import * as S from './Nav.styles'

  function NavHtml(props) {
    return (
        <S.MenuItem>
        <S.MenuLink href="#">
          {props.text}
        </S.MenuLink>
      </S.MenuItem>
    );
  }

  export const Nav = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);
    return (
      <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
        <S.MenuList>
                <NavHtml text="Главное" />
                <NavHtml text="Мой плейлист" />
                <NavHtml text="Войти" />
                </S.MenuList>
                </S.NavMenu>
        )}
        </S.MainNav>

    );
  };
