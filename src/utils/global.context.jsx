import { createContext, useEffect, useReducer } from "react";
import { movies } from './servicesApi';

export const ContextGlobal = createContext(undefined);

const initialSate = () =>{
    localStorage.setItem('movies', JSON.stringify( movies ));
    
    return {
        moviesData: JSON.parse( localStorage.getItem('movies')) || [],
        searchMovie: '',
        previousSearch: '',
    };
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_MOVIE_DATA':
            return { ...state, movies: action.payload }
        case 'SET_MOVIE_SEARCH':
            return { ...state, searchMovie: action.payload }
        case 'SET_PREVIOUS_SEARCH':
            return { ...state, previousSearch: action.payload }
        default:
            return state;
    }
}

export const ContextProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(reducer, [], initialSate);

    return(
        <ContextGlobal.Provider value={{ state, dispatch }}>
            { children }
        </ContextGlobal.Provider>
    )
}