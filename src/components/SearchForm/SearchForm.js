import FilterCheckbox from "../FilterCheckBox/FilterCheckBox";
  function SearcForm({ handleShortFilms, inputText, shortMovies, handleSubmit, handleChange, input, errorQuery  }) {
 return (
 <section className="search">
            <form className="search__form" 
               id="form"
               onSubmit={handleSubmit}>
               <div className="search__field" >
                <input
                className="search__input"
                name="search"
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="Фильм"
                autoComplete="off"
                defaultValue={input}
                required
                ></input>
                <span  className="search-error" >{errorQuery}</span>
                <button className="search__button" type="submit" disabled={!input} ></button>
                </div>
            </form>
            
            <FilterCheckbox shortMovies={shortMovies} handleShortFilms={handleShortFilms}/>
        </section>
    );
}

export default SearcForm