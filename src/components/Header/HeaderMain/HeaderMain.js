import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'

function HeaderMain() {

    return(
        <header className="header header_color">
            <div className='header__container'>
                <Link to="/" className="header__logo">
                    <img src={logo} alt="логотип" />
                </Link>
                <div className='header__buttons'>
                    <Link to="/sign-up" className='header__signup'>Регистрация</Link>
                    <Link to="/sign-in" className='header__signin'>Войти</Link>
                </div>
            </div>
        </header>
    );     
}
export default HeaderMain;