import { useState } from "react";
import { MoviesGrid } from "./MoviesGrid"
import { SearchMovies } from "./SearchMovies"

export const MovieDatabases = () => {
    
    const [inputValue, setInputValue] = useState('');

    return (
      <header>
        <h1>Movies</h1>
        <SearchMovies setSearchMovie={ setInputValue }/>
        { <MoviesGrid movieSearch={ inputValue }/> }
      </header>
    )
}
