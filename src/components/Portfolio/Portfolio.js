import arrow from '../../images/text__COLOR_font-main.svg';

function Portfolio() {
    return(
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <nav className="portfolio__list">
                <a
                href="https://ermolay1.github.io/how-to-learn/"
                className="portfolio__link portfolio__link-border"
                target="_blank"
                rel="noreferrer">
                <p className="portfolio__text">Статичный сайт</p>
                <img className="portfolio__image" src={arrow} alt="стрелка" />
                </a>
                <a
                href="https://ermolay1.github.io/russian-travel/"
                className="portfolio__link portfolio__link-border"
                target="_blank"
                rel="noreferrer">
                <p className="portfolio__text">Адаптивный сайт</p>
                <img className="portfolio__image" src={arrow} alt="стрелка" />
                </a>
                <a
                href="https://ermolay1.github.io/react-mesto-auth/"
                className="portfolio__link"
                target="_blank"
                rel="noreferrer">
                <p className="portfolio__text">Одностраничное приложение</p>
                <img className="portfolio__image" src={arrow} alt="стрелка" />
                </a>
            </nav>
        </section>
    );
}

export default Portfolio;