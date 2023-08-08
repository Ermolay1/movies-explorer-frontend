import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';

function Login() {
    return (
      <main className="login">
        <section>
          <Logo />
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form">
            <div className="login__field">
              <label className="login__label">E-mail</label>
              <input className="login__input" type="email" name="email" placeholder="E-mail" required minLength={2} maxLength={20} />
              <span className="login__input-error"></span>
            </div>
            <div className="login__field">
              <label className="login__label">Пароль</label>
              <input className="login__input" type="password" name="password" placeholder="Пароль" required minLength="6" maxLength={20} />
              <span className="login__input-error"></span>
            </div>
            <button className="login__button hover-button" type="submit">Войти</button>
            <p className="login__sign">Ещё&nbsp;не&nbsp;зарегистрированы?&nbsp;
              <Link to="/signup" className="login__signup-link hover-link">Регистрация</Link>
            </p>
          </form>
        </section>
      </main>
    )
  }
  
  export default Login