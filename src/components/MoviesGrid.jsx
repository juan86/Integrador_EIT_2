import { useContext, useEffect, useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContextGlobal } from '../utils/global.context.jsx';
import { useServiceMovieSearch } from '../hooks/useServiceMovieSearch.jsx';
import { Card } from './Card.jsx';


export function MoviesGrid() {
    const { state, dispatch } = useContext( ContextGlobal );
    const primerRender = useRef(true);
    const { listMovies, page, hasMorePage, setPage, getMoviesOrSearch, setListMovies } = useServiceMovieSearch(state, dispatch);

    useEffect( () => {
        if (primerRender.current) {
            primerRender.current = false;
        }else{
            setListMovies([]);
            setPage(1);
            getMoviesOrSearch();
        }
    }, [state.searchMovie]);
    
    useEffect( () => {
        getMoviesOrSearch();
    }, [page]);

    return (
        <InfiniteScroll 
            dataLength={ listMovies.length } 
            hasMore={ hasMorePage } 
            next={() => setPage( prevPage => prevPage + 1 )}
            loader={<h4>Loading...</h4>}
        >
            <main className='card-grid'> 
                { listMovies.map(movie => <Card key={movie.id} movie={movie} />) }
            </main>
        </InfiniteScroll>
    )
}