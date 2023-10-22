import React from "react";
import { useState } from 'react';
import * as S from './Nav.styles'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setPageName } from "../../store/player.slice";

  function NavHtml(props) {
    return (
        <S.MenuItem>
        <S.NewNavLink to={props.to} onClick={props.logout}>
          {props.text}
        </S.NewNavLink>
      </S.MenuItem>
    );
  }

  export const Nav = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const [visible, setVisible] = useState(false);
const toggleVisibility = () => setVisible(!visible);
const namePage = 'favorites'

    const logout = () => {
      localStorage.removeItem('userName')
      navigate('/login')
      dispatch(deleteUser())
    };


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
                <NavHtml text="Мой плейлист" to="/favorites" onClick={() => dispatch(setPageName({namePage}))}/>
                <NavHtml text="Выйти" to="/login" logout={logout}/>
                </S.MenuList>
                </S.NavMenu>
        )}
        </S.MainNav>

    );
  };
