import { useContext, useState } from "react";
import { ContextGlobal } from '../utils/global.context';
import './SearchMovies.css';

export const SearchMovies = () => {
   
    const [inputSearch, setInputSearch ] = useState('');
    const { state, dispatch } = useContext( ContextGlobal );
    
    const onInputChange = ({ target }) => {
        setInputSearch(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        dispatch({type: 'SET_MOVIE_SEARCH', payload: inputSearch});
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
