import arrowAccent from '../../images/text__COLOR_font-main.svg';
import './Portfolio.css';

function Portfolio() {
    return (
      <section className="portfolio">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__links">
          <li className="portfolio__link-container">
            <a className="portfolio__link hover-link" href="https://ermolay1.github.io/how-to-learn/" rel="noreferrer" target="_blank">Статичный сайт
              <img className="portfolio__arrow-accent" src={arrowAccent} alt="Стрелка" />
            </a>
          </li>
          <li className="portfolio__link-container">
            <a className="portfolio__link hover-link" href=" https://ermolay1.github.io/russian-travel/" rel="noreferrer" target="_blank">Адаптивный сайт
              <img className="portfolio__arrow-accent" src={arrowAccent} alt="Стрелка" />
            </a>
          </li>
          <li className="portfolio__link-container">
            <a className="portfolio__link hover-link" href="https://ermolay1.github.io/react-mesto-auth/" rel="noreferrer" target="_blank">Одностраничное приложение
              <img className="portfolio__arrow-accent" src={arrowAccent} alt="Стрелка" />
              </a>
          </li>
        </ul>
      </section>
    )
  }
  
  export default Portfolio