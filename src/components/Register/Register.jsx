import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Register.css';

function Register() {
    return (
      <main className="register">
        <section>
          <Logo />
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form">
            <div className="register__field">
              <label className="register__label">Имя</label>
              <input className="register__input" type="text" name="name" placeholder="Имя" required minLength={2} maxLength={20}/>
              <span className="register__input-error"></span>
            </div>
            <div className="register__field">
              <label className="register__label">E-mail</label>
              <input className="register__input" type="email" name="email" placeholder="E-mail" required />
              <span className="register__input-error"></span>
            </div>
            <div className="register__field">
              <label className="register__label">Пароль</label>
              <input className="register__input register__input-password" type="password" name="password" placeholder="Пароль" required minLength="6" />
              <span className="register__input-error">Что-то пошло не так...</span>
            </div>
            <button className="register__button hover-button" type="submit">Зарегистрироваться</button>
            <p className="register__login-sign">Уже зарегистрированы?&nbsp;
              <Link to="/signin" className="register__login-link hover-link">Войти</Link>
            </p>
          </form>
        </section>
      </main>
    )
  }
  
  export default Register