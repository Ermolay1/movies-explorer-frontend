import FilterCheckbox from "../FilterCheckBox/FilterCheckBox";

function SearcForm({handleShortFilms, shortMovies, handleSubmit, handleChange, input, errorQuery }) {
    
    return(
        <section className="search">
            <form className="search__form" id="form" onSubmit={handleSubmit}>
               <div className="search__field" >
                <input
                className="search__input"
                name="search"
                type="text"
                placeholder="Фильм"
                autoComplete="off"
                defaultValue={input}
                onChange={handleChange}
                required
                ></input>
                <span className="search__error">{errorQuery}</span>
                <button className="search__button" type="submit"></button>
                </div>
            </form>
            
            <FilterCheckbox shortMovies={shortMovies} handleShortFilms={handleShortFilms}/>
        </section>
    );
}

export default SearcForm