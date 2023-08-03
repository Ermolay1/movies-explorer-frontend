import { Link } from 'react-router-dom';

function Links() {
   return (
    <nav className="navigation">
            <Link to="/signup" className="navigation__link navigation__link_register hover-link">Регистрация</Link>
            <Link to="/signin" className="navigation__link navigation__link_register hover-button">Войти</Link>
    </nav>
   ) 
}

export default Links