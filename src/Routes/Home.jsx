import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { SearchMovies } from "../components/SearchMovies";
import { MoviesGrid } from "../components/MoviesGrid";

export const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    return (
            <header>
                 <Link 
                    to={'/'}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("page");
                      }}
                 >
                    <h1>Movies</h1>
                 </Link>
                <SearchMovies setSearchMovie={ setInputValue }/>
                { <MoviesGrid movieSearch={ inputValue }/> }
            </header>
    )
}