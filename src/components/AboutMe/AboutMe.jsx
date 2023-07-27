import student_poto from '../../images/me.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
      <section className="about-me" id="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__container">
          <div className="about-me__text-container">
            <h3 className="about-me__name">Алексей</h3>
            <h4 className="about-me__info">Фронтенд-разработчик, 39 лет</h4>
            <p className="about-me__description">Я из Гагарина Смоленской области. У меня средне специальное образвание. В IT пришел случайно, в 2022 случайно попал на курсы в ТГУ "Веб-программист с нуля до первого проекта" меня очень увлекло и решил развиваться стал продолжать учится в ЯНДЕКС-практикуме. Сейчас учусь и стараюсь освоить эту профессию, что бы в дальнейшем работать в этой сфере.</p>
            <a className="about-me__social-network hover-link" href="https://github.com/Ermolay1" rel="noreferrer" target="_blank">GitHub</a>
          </div>
          <img className="about-me__photo" src={student_poto } alt="Фотография студента" />
        </div>
      </section>
    )
  }
  
  export default AboutMe