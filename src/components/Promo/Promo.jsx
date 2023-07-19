import NavTab from '../NavTab/NavTab';
import './Promo.css';
import foto_promo from '../../images/pic__COLOR_landing-logo.png';

function Promo() {
    return (
      <section className="promo">
        <img className="promo__foto" src={foto_promo} alt="Логотип"></img>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </section>
    )
  }
  
  export default Promo