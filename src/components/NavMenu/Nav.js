import React from "react";
import { useState } from 'react';
import * as S from './Nav.styles'

  function NavHtml(props) {
    return (
        <S.MenuItem>
        <S.NewNavLink to={props.to} onClick={props.onAuthButtonClick}>
          {props.text}
        </S.NewNavLink>
      </S.MenuItem>
    );
  }

  export const Nav = ({ onAuthButtonClick }) => {
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
                <NavHtml text="Главное" to="/"/>
                <NavHtml text="Мой плейлист" to="/favorites"/>
                <NavHtml text="Выйти" to="/login" onAuthButtonClick={onAuthButtonClick}/>
                </S.MenuList>
                </S.NavMenu>
        )}
        </S.MainNav>

    );
  };
