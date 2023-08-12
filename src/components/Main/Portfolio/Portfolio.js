import React from "react";
import HeadingGrade5 from "../../HeadingGrade/HeadingGrade5/HeadingGrade5";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <HeadingGrade5 name="Портфолио"/>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <Link className="portfolio__project-link" target="_blank" to="https://ermolay1.github.io/how-to-learn/">
            Статичный сайт <div className="portfolio__arrow-link"></div></Link>
        </li>
        <li className="portfolio__project">
          <Link className="portfolio__project-link" target="_blank" to="https://ermolay1.github.io/russian-travel/">
            Адаптивный сайт <div className="portfolio__arrow-link"></div></Link>
        </li>
        <li className="portfolio__project">
          <Link className="portfolio__project-link" target="_blank" to="https://ermolay1.github.io/react-mesto-auth/">
            Одностраничное приложение <div className="portfolio__arrow-link"></div></Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
