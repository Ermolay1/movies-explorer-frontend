import FilterCheckbox from "../FilterCheckBox/FilterCheckBox";

function SearcForm({handleShortFilms, inputText, shortMovies, handleSubmit, handleChange, input, disabled }) {
    
    return(
        <section className="search">
            <form className="search__form" id="form" onSubmit={handleSubmit}>
               <div className="search__field" >
                <input
                className="search__input"
                name="search"
                type="text"
                value={inputText}
                placeholder="Фильм"
                autoComplete="off"
                defaultValue={input}
                onChange={handleChange}
                disabled={disabled}
                required
                ></input>
                <span className="search-erorr"></span>
                <button className="search__button" type="submit" disabled={disabled}></button>
                </div>
            </form>
            
            <FilterCheckbox shortMovies={shortMovies} handleShortFilms={handleShortFilms}/>
        </section>
    );
}

export default SearcForm