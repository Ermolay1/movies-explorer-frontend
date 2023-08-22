import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import React from "react";
import useFormWithValidation from '../../hook/useFormWithValidation';
function Login({ handleAuthUser }) {

   /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
      }
    
      function handlePasswordChange(evt) {
        setPassword(evt.target.value);
      }*/
      const { values, errors, isValid, handleChange } =useFormWithValidation();
      function handleSubmit(e) {
        e.preventDefault();
        const { email, password} = values;
        handleAuthUser(email, password);
        console.log(email, " ", password);
      }
    return(
        <div className="form">
            <form className='form__container' onSubmit={handleSubmit} >
                <Link to='/' className='form__logo'>
                  <img className='form__logo-image' src={logo} alt='логотип' />
                </Link>
                <h2 className='form__title'>Рады видеть!</h2>
                <h3 className='form__input-title'>E-mail</h3>
                <input className='form__input' onChange={handleChange} name='email' value={values.email} type='email' required></input>
                <span className='form__input-error'>{errors.email}</span>
                <h3 className='form__input-title'>Пароль</h3>
                <input className='form__input' onChange={handleChange}type='password' name='password' value={values.password} minLength={8}required></input>
                <span className='form__input-error'>{errors.password}</span>
                <button className='form__button form__button_login' type='submit' disabled={!isValid}>Войти</button>
                <div className='form__question'>
                    <p className='form__tag'>Еще не зарегистрированы?</p>
                    <Link to="/sign-up" className='form__link'>Регистрация</Link>
                </div> 
            </form>
        </div>
    );
}

export default Login;