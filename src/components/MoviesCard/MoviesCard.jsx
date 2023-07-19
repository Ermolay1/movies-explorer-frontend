import movie_image from '../../images/movie_image.jpg';
import './MoviesCard.css';

function MoviesCard() {
    return (
      <>
        <div className="movie">
          <img className="movie__image" src={movie_image} alt="Постер" />
          <button className="movie__button_save hover-button" type="button">Сохранить</button>
          <div className="movie__info">
            <p className="movie__name">Бег это свобода</p>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </div>
        <div className="movie">
          <img className="movie__image" src={movie_image} alt="Постер" />
          <button className="movie__button_saved" type="button"></button>
          <div className="movie__info">
            <p className="movie__name">Бег это свобода</p>
            <p className="movie__duration">1ч 17м</p>
          </div>
        </div>
      </>
    )
  }
  
  export default MoviesCard