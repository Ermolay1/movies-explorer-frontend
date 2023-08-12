import React from "react";
import HeadingGrade2 from "../../HeadingGrade/HeadingGrade2/HeadingGrade2";
import HeadingGrade3 from "../../HeadingGrade/HeadingGrade3/HeadingGrade3";
import HeadingGrade4 from "../../HeadingGrade/HeadingGrade4/HeadingGrade4";
import photo from "../../../images/me.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <HeadingGrade2 name="Студент"/>
      <article className="about-me__info">
        <div className="about-me__container">
          <HeadingGrade3 name="Алексей" className="about-me__heading-grade-3"/>
          <HeadingGrade4 name="Фронтенд-разработчик, 39 лет" className="about-me__heading-grade-4"/>
          <p className="about-me__description">
          Я из Гагарина Смоленской области. У меня средне специальное образвание. В IT пришел случайно, в 2022 случайно попал на курсы в ТГУ "Веб-программист с нуля до первого проекта" меня очень увлекло и решил развиваться стал продолжать учится в ЯНДЕКС-практикуме. Сейчас учусь и стараюсь освоить эту профессию, что бы в дальнейшем работать в этой сфере.
          </p>
          <div className="about-me__links">
            <a className="about-me__link" href="https://github.com/Ermolay1">Github</a>
          </div>
        </div>
        <img className="about-me__photo" src={photo} alt="Моя фотография"></img>
      </article>
    </section>
  );
};

export default AboutMe;