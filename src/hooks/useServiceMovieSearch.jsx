import { useState } from 'react';

export const useServiceMovieSearch = (state, dispatch) => {
  
    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMorePage, setHasMorePage] = useState(true);

    const getMoviesApi = ( page ) =>{
        return new Promise((resolve, reject) =>{
            const moviesByPage = 10;
            const start = (page - 1) * moviesByPage;
            const end = page * moviesByPage;
    
            const listMoviesbyPage = state.moviesData.slice(start, end);
    
            setTimeout(() => {
                if (listMoviesbyPage.length > 0){
                    resolve(listMoviesbyPage);
                }else{
                    reject('No hay mas resultados');
                } 
            }, 500);
        });
    }

    const searchMovieByName = ( page ) =>{
        return new Promise((resolve, reject) => {
            const moviesByPage = 10;
            const start = (page - 1) * moviesByPage;
            const end = page * moviesByPage;
    
            const movieSearch = state.moviesData
                .filter(movie => movie.title.toLowerCase().includes(state.searchMovie))
                .slice(start, end);
    
            setTimeout(() => {
                if (movieSearch.length > 0) {
                    resolve(movieSearch);
                } else {
                    reject('No hay más resultados');
                }
            }, 500);
        });
    }

    const getMoviesOrSearch = async ( ) => {
        try {
            const movies = state.searchMovie.length > 0 
                ? await searchMovieByName(page) 
                : await getMoviesApi(page);
    
            if (state.previousSearch.length > 0) {
                setListMovies(movies);
                dispatch({type: 'SET_PREVIOUS_SEARCH', payload: ''});
            } else {
                setListMovies(prevListMovies => [...prevListMovies, ...movies]);
            }
    
            setHasMorePage(movies.length > 0);
        } catch {
            setHasMorePage(false);
        }
    }
  
    return { listMovies, page, hasMorePage, setPage, getMoviesOrSearch, setListMovies};
}
