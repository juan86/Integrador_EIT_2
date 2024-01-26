import { useState } from "react";
import './SearchMovies.css';

export const SearchMovies = ({ setSearchMovie, searchMovie }) => {
   
    const [inputSearch, setInputSearch ] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputSearch(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        setSearchMovie(inputSearch);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Search Movie"
                value={inputSearch}
                onChange={ onInputChange }
            />
        </form>
    )
}
