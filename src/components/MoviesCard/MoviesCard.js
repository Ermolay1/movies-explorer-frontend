import React from "react";
import {useCallback} from "react";
import {Link, useLocation} from "react-router-dom";
import {formatImageUrl} from "../../utils/formatImageUrl";
import {editTimeFormat} from "../../utils/editTimeFormat";

const MoviesCard = ({movie, onAddBookmark, onDeleteBookmark}) => {
  const location = useLocation();

  const handleAddBookmark = useCallback(() => {
    onAddBookmark(movie);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  const handleDeleteBookmark = useCallback(() => {
    onDeleteBookmark(movie);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  const bookmarkIcon = () => {
    if (movie.bookmark) {
      return (<button className="movies-card__add-bookmark movies-card__add-bookmark-active" type="button" onClick={handleDeleteBookmark}></button>)
    } else {
      return (<button className="movies-card__add-bookmark" type="button" onClick={handleAddBookmark}>Сохранить</button>)
    };
  };

  const removeBookmarkIcon = () => {
    return (<button className={`movies-card__add-bookmark movies-card__delete-bookmark`} type="button" onClick={handleDeleteBookmark}></button>)
  };

  const renderButton = () => {
    if (location.pathname === "/movies") {
      return bookmarkIcon();
    } else {
      return removeBookmarkIcon();
    };
  };

  return (
    <div className="movies-card">
       <Link className="movies-card__link" to={movie.trailer || movie.trailerLink} target="_blank"><img className="movies-card__img" src={(movie.image.url && formatImageUrl(movie.image.url)) || movie.image} alt={movie.nameEN || movie.nameRU}></img></Link>
       {renderButton()}
    <div className="movies-card__content">
      <h2 className="movies-card__title">{movie.nameEN || movie.nameRU}</h2>
      <p className="movies-card__duration">{editTimeFormat(movie.duration)}</p>
    </div>
  </div>
  );
};

export default MoviesCard;
