import { useState } from "react";
import { SearchMovies } from "../components/SearchMovies";
import { MoviesGrid } from "../components/MoviesGrid";

export const Home = () => {
    const [inputValue, setInputValue] = useState('');

    return (
            <header>
                <h1>Movies</h1>
                <SearchMovies setSearchMovie={ setInputValue }/>
                { <MoviesGrid movieSearch={ inputValue }/> }
            </header>
    )
}