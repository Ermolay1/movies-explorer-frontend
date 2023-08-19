import ava from '../../images/me.jpg';

function AboutMe() {
    return(
        <section className="about-me" id="about-me">
           <h2 className="about-me__title">Студент</h2>
           <div className="about-me__container">
                <div className="about-me__content">
                    <h3 className="about-me__second-title">Алексей</h3>
                    <p className="about-me__info">Фронтенд-разработчик, 39 лет</p>
                    <p className="about-me__description">
                    Я из Гагарина Смоленской области. У меня средне специальное образвание. В IT пришел случайно, в 2022 случайно попал на курсы в ТГУ "Веб-программист с нуля до первого проекта" меня очень увлекло и решил развиваться стал продолжать учится в ЯНДЕКС-практикуме. Сейчас учусь и стараюсь освоить эту профессию, что бы в дальнейшем работать в этой сфере.
                    </p>
                    <a
                    href="https://github.com/Ermolay1"
                    className="about-me__link"
                    target="_blank"
                    rel="noreferrer">
                    Github
                    </a>
                </div>
                <img src={ava} alt="фото" className="about-me__photo" />
            </div>
        </section>
    );
}

export default AboutMe