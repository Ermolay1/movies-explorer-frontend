import movie_image from '../../images/movie_image.jpg';
import './MoviesCard.css';

function MoviesCard() {
    return (
      <ul>
        <li className="movie">
          <img className="movie__image" src={movie_image} alt="Постер фильма" />
          <button className="movie__button_save hover-button" type="button">Сохранить</button>
          <div className="movie__info">
            <h2 className="movie__name">Бег это свобода</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
        <li className="movie">
          <img className="movie__image" src={movie_image} alt="Постер Фильма" />
          <button className="movie__button_saved" type="button"></button>
          <div className="movie__info">
            <h2 className="movie__name">Бег это свобода</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </li>
      </ul>
    )
  }
  
  export default MoviesCard