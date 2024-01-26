import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getMoviesApi, searchMovieByName } from '../utils/servicesApi.js'
import { Card } from './Card.jsx';

export function MoviesGrid({ movieSearch }) {
    
    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMorePage, setHasMorePage] = useState(true);

    const getMovies = async () => {
        if ( movieSearch.length > 0 ) return;
        
        try{
            const newListMovies = await getMoviesApi(page);
            setListMovies(prevListMovies => prevListMovies.concat(newListMovies));
        } catch{
            setHasMorePage( false );
        }
    }

    const getSearchMovie = async () => {
        
        if(movieSearch.length > 0){
            try{
                const filmFound = await searchMovieByName(movieSearch);
                setListMovies(filmFound);    
            }catch{
                setListMovies([]);
            }
            setHasMorePage( false );
        }
        
    }

    useEffect( () => {
        getMovies();
    }, [page]);
    
    useEffect( () => {
        getSearchMovie();
    }, [movieSearch]);

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