import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { ActiveUserContext } from "./ParentAuthPage";
import { useContext } from "react";
import { LoginIn, postNewUser } from "../../API/user.api";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/player.slice";

export default function AuthPage() {

  const dispatch = useDispatch()
  const {email} = useContext(ActiveUserContext)
  const {setEmail} = useContext(ActiveUserContext)
  const {password} = useContext(ActiveUserContext)
  const {setPassword} = useContext(ActiveUserContext)
  const {repeatPassword} = useContext(ActiveUserContext)
  const {setRepeatPassword} = useContext(ActiveUserContext)
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false)
  const [isLoginMode, setIsLoginMode] = useState(true)

  const navigate = useNavigate()

  const handleLogin = async () => {
    if(!password){
      setError('Введите пароль')
      console.log(password);
      return
    }
    if(!email){
      setError('Введите почту')
      return
    }
    setDisable(true)
 const user = await LoginIn(email, password)
 let regError = JSON.parse(localStorage.getItem('error'))
  if(regError){
    setDisable(false)
    setError(regError)
    localStorage.removeItem('error')
    return
  }
  dispatch(changeUser({user}))
 navigate("/")
  };


  const handleRegister = async () => {
    if (!email || !password || !repeatPassword) {
      setError("Эти поля не могут быть пустыми.")
      return
    }
if (password === repeatPassword) {
  setDisable(true)
 const user = await postNewUser(email, password)
  let regError = JSON.parse(localStorage.getItem('error'))
  if(regError){
    setDisable(false)
    setError(regError)
    localStorage.removeItem('error')
    return
  }
  dispatch(changeUser({user}))
  navigate("/")
}
if (password !== repeatPassword) {
  setError('Пароли не совпадают')
  return
}
  };
  const regOrLoginPage = () => {
    if (isLoginMode) {
      setIsLoginMode(false)
      return
    }
    if (!isLoginMode) {
      setIsLoginMode(true)
    }
  }
  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                

              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>

              <S.PrimaryButton disabled={disable} onClick={() => handleLogin()}>
                Войти
              </S.PrimaryButton>
                <S.SecondaryButton  onClick={() => regOrLoginPage()}>Зарегистрироваться</S.SecondaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}

            <S.Buttons>

              <S.PrimaryButton disabled={disable} onClick={() => handleRegister()}>
                Зарегистрироваться
              </S.PrimaryButton>
                <S.SecondaryButton onClick={() => regOrLoginPage()}>Войти</S.SecondaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}