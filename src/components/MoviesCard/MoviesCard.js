import React from "react";
import { useLocation } from "react-router-dom";
import { transformDuration } from '../../utils/utils.js';
function MoviesCard({ movie, saved, onLikeClick, onDeleteClick }) {
    const location = useLocation();

    function handleLikeClick() {
        onLikeClick(movie);
      }

      function handleDeleteClick() {
        onDeleteClick(movie);
      }
    
    return(
        <li className="card">
            <a target="_blank" className="card-link" rel="noreferrer" href={movie.trailerLink}>
                <img
                className="card-image"
                alt={movie.nameRU}
                src={movie.image}
                />
            </a>
            {(location.pathname !== '/saved-movies') ?
                    (<button type="button" 
                    className={`card-like ${saved  ? 'card__like_active' : ''}`}
                    onClick={saved ? handleDeleteClick : handleLikeClick}
                    >
                    </button>) : (<button type="button" className="card__delete" onClick={handleDeleteClick}></button>)}
            <div className="card__container">
                <div className="card__info-container">
                    <h2 className="card__text">{movie.nameRU}</h2>
                    <p className="card__time">{transformDuration(movie.duration)}</p> 
                </div>
            
            </div>
        </li>
    );
};

export default MoviesCard;