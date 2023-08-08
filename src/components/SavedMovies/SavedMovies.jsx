import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <main className='saved-movies'>
            <SearchForm />
            <MoviesCardList />
            <button className="saved-movies__more-button hover-button" type="button">Ещё</button>
        </main>
    )
}

export default SavedMovies