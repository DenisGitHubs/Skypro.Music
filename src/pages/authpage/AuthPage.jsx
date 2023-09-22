import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { ActiveUserContext, useActiveUserContext } from "./ParentAuthPage";
import { useContext } from "react";

export default function AuthPage({ isLoginMode = false }) {
  const {email} = useContext(ActiveUserContext)
  const {setEmail} = useContext(ActiveUserContext)
  const {password} = useContext(ActiveUserContext)
  const {setPassword} = useContext(ActiveUserContext)
  const {repeatPassword} = useContext(ActiveUserContext)
  const {setRepeatPassword} = useContext(ActiveUserContext)

const [email2, setEmail2] = useState('')
const [password2, setPassword2] = useState('')
const [repeatPassword2, setRepeatPassword2] = useState('')
console.log(email);
  const [error, setError] = useState(null);

  const handleLogin = async ({ email, password }) => {
    alert(`Выполняется вход: ${email} ${password}`);
    setError("Неизвестная ошибка входа");
  };

  const handleRegister = async () => {
    alert(`Выполняется регистрация: ${email} ${password}`);
    setError("Неизвестная ошибка регистрации");
  };

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
                value={email2}
                onChange={(event) => {
                  setEmail2(event.target.value);
                  setEmail({name: email2})
                }}
                

              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password2}
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
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
                value={email2}
                onChange={(event) => {
                  setEmail2(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password2}
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword2}
                onChange={(event) => {
                  setRepeatPassword2(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}