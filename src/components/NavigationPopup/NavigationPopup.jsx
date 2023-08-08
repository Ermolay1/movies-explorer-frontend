import { Link } from 'react-router-dom';
import React from 'react';

function NavigationPopup() {

    const [isPopupOpen, setIsPopupOpen] = React.useState(false)
    
    function handlePopupOpen() {
        setIsPopupOpen(true)
    }

    function handlePopupClose() {
        setIsPopupOpen(false)
    }
   return (
     <section>
       <div className={`${isPopupOpen ? "overlay" : ""}`}>
         <nav className={`navigation navigation__popup ${isPopupOpen ? "navigation__popup_open" : ""}`}>
               <button className="navigation__popup-button navigation__popup-button_close hover-button" type='button' onClick={handlePopupClose}></button>
               <Link to="/" className="navigation__link navigation__link_navi navigation__link-main hover-link hover-popup">Главная</Link>
               <Link to="/movies" className="navigation__link navigation__link_navi hover-link hover-popup">Фильмы</Link>
               <Link to="/saved-movies" className="navigation__link navigation__link_navi hover-link hover-popup" >Сохранённые фильмы</Link>
               <Link to="/profile" className="navigation__account-button hover-button">
                   Аккаунт
               </Link>
          </nav>
       </div>
       <button className="navigation__popup-button navigation__popup-button_burger hover-button" type='button' onClick={handlePopupOpen}></button>
     </section>
   ) 
   }

export default NavigationPopup