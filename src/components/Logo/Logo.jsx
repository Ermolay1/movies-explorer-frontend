import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import './Logo.css';


function Logo() {
    return (
      <>
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/' && (
      <Link className="logo_container">
        <img className="logo" src={logo} alt="Логотип сайта" />
      </Link>
        )
      }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/movies' && (
      <Link className="logo_container">
        <img className="logo" src={logo} alt="Логотип сайта" />
      </Link>
        )
      }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/saved-movies' && (
      <Link className="logo_container">
        <img className="logo" src={logo} alt="Логотип сайта" />
      </Link>
        )
      }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/profile' && (
      <Link className="logo_container">
        <img className="logo" src={logo} alt="Логотип сайта" />
      </Link>
        )
      }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/signin' && (
      <Link className="logo_container" >
        <img className="logo && logo__register" src={logo} alt="Логотип сайта" />
      </Link>
        )
      }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/signup' && (
      <Link className="logo_container" >
        <img className="logo && logo__register" src={logo} alt="Логотип сайта" />
      </Link>
        )
      }
      </>
    )
  }
  
  export default Logo