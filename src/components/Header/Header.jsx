import Logo from '../Logo/Logo';
import  Navigation  from '../Navigation/Navigation';
import './Header.css';

function Header() {

    return (
      <>
      {
      
          // eslint-disable-next-line no-restricted-globals
          location.pathname === '/' && (
      <header className='header && header_color'>
         <Logo />
         <Navigation />
      </header>
      )}
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/movies' && (
          <header className='header'>
         <Logo />
         <Navigation />
      </header>
        )
      }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/saved-movies' && (
          <header className='header'>
         <Logo />
         <Navigation />
      </header>
        )
        }
      {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === '/profile' && (
          <header className='header'>
         <Logo />
         <Navigation />
      </header>
        )
      }
      </>
    )
}

export default Header