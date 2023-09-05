import { NavLink } from "react-router-dom";
export const Login = ({ user, onAuthButtonClick }) => {
    return (
        <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter">
              <NavLink to="/" user={user} onClick={onAuthButtonClick}>Войти</NavLink>
            </button>
            <button className="modal__btn-signup">
              <NavLink className="linkNav" to="/register">Зарегистрироваться</NavLink>

            </button>
          </form>
        </div>
      </div>
    );
  }