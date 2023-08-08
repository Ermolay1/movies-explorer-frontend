import movie_image from '../../images/movies_image3.svg';
import './MoviesCard.css';

function MoviesCard() {
  const title = "название фильма";//потом будет присваеваться разное
    return (
      <li>
        <div className="movie">
          <img className="movie__image" src={movie_image} alt={title} />
          <button className="movie__button_save hover-button" type="button">Сохранить</button>
          <button className="movie__button_saved" type="button"></button>
          <div className="movie__info">
            <h2 className="movie__name">{title}</h2>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </div>
      </li>
    )
  }
  
  export default MoviesCard