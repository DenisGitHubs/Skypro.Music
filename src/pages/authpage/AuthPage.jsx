import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { ActiveUserContext } from "./ParentAuthPage";
import { useContext } from "react";
import { LoginIn, postNewUser } from "../../Api";

export default function AuthPage(props) {
  const {email} = useContext(ActiveUserContext)
  const {setEmail} = useContext(ActiveUserContext)
  const {password} = useContext(ActiveUserContext)
  const {setPassword} = useContext(ActiveUserContext)
  const {repeatPassword} = useContext(ActiveUserContext)
  const {setRepeatPassword} = useContext(ActiveUserContext)
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false)
  const navigate = useNavigate()


  const handleLogin = async ({ email, password, props }) => {
    if(!password){
      localStorage.setItem('error', JSON.stringify('Пароли не совпадают'))
      setError('Введите пароль')
      localStorage.removeItem('error')
      return
    }
    if(!email){
      localStorage.setItem('error', JSON.stringify('Пароли не совпадают'))
      setError('Введите почту')
      localStorage.removeItem('error')
      return
    }
 await LoginIn({email, password, props})
 let Regerror = JSON.parse(localStorage.getItem('error'))

  if(Regerror){
    setError(Regerror)
    localStorage.removeItem('error')
    return
  }

 navigate("/")
  };

  const handleRegister = async ({props}) => {

    if (!email || !password || !repeatPassword) {
      localStorage.setItem('error', JSON.stringify('Пароли не совпадают'))
      setError("Эти поля не могут быть пустыми.")
      localStorage.removeItem('error')
      return
    }
if (password === repeatPassword) {
  setDisable(true)
 await postNewUser({email, password, props})
  let Regerror = JSON.parse(localStorage.getItem('error'))
  if(Regerror){
    setError(Regerror)
    localStorage.removeItem('error')
    return
  }
  console.log("object");
  navigate("/")
}
if (password !== repeatPassword) {
  localStorage.setItem('error', JSON.stringify('Пароли не совпадают'))
  setError('Пароли не совпадают')
  localStorage.removeItem('error')
  return
}

  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);

  }, [props.isloginmode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {props.isloginmode ? (
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

              <S.PrimaryButton onClick={() => handleLogin({ email, password, props })}>
                Войти
              </S.PrimaryButton>

              <Link to="/register" >
                <S.SecondaryButton disabled={disable}>Зарегистрироваться</S.SecondaryButton>
              </Link>
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
              <S.PrimaryButton onClick={() => handleRegister({ props })}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}