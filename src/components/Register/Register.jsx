import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';
import React from "react";
import useFormWithValidation from '../../hook/useFormWithValidation';
function Register({ handleRegisterUser }) {
   // const [name, setName] = useState("");
   // const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const { values, errors, isValid, handleChange } = useFormWithValidation();
    
    /*function handleNameChange(evt) {
        setName(evt.target.value);
      }

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
      
      }
    
      function handlePasswordChange(evt) {
        setPassword(evt.target.value);
      }
    */
     function handleSubmit(e) {
        e.preventDefault();
        const { email, password, name } = values;
        handleRegisterUser(name, email, password);
        console.log(name,email, " ", password);
      }
    
      
      
    return(
        <div className="form">
            <form className='form__container' onSubmit={handleSubmit} >
                <Link to='/' className='form__logo'>
                <img className='form__logo-image' src={logo} alt='логотип' />
                </Link>
                <h2 className='form__title'>Добро пожаловать!</h2>
                <h3 className='form__input-title'>Имя</h3>
                <input className='form__input' onChange={handleChange} value={values.name} name='name'  type="name"  minLength={2} maxLength={30} required></input>
                <span className='form__input-error'>{errors.name}</span>
                <h3 className='form__input-title'>E-mail</h3>
                <input className='form__input' onChange={handleChange} value={values.email} placeholder='email'  name='email'  type='email' required></input>
                <span className='form__input-error'>{errors.email}</span>
                <h3 className='form__input-title'>Пароль</h3>
                <input className='form__input input-password'onChange={handleChange} value={values.password} type='password'  name='password' minLength={8} required></input>
                <span className='form__input-error'>{errors.password}</span>
                <button className='form__button' type='submit' disabled={!isValid}>Зарегистрироваться</button>
                <div className='form__question'>
                    <p className='form__tag'>Уже зарегистрированы?</p>
                    <Link to="/sign-in" className='form__link'>Войти</Link>
                </div> 
            </form>
        </div>
    );
}

export default Register;