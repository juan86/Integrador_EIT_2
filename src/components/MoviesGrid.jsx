import { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContextGlobal } from '../utils/global.context.jsx';
import { Card } from './Card.jsx';

export function MoviesGrid() {
    
    const { state, dispatch } = useContext( ContextGlobal );
    
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

    const searchMovieByName = () =>{
        
        return new Promise( ( resolve, reject ) => {
            const movieSearch = state.moviesData.filter( movie => movie.title.toLowerCase().includes( state.searchMovie ));
            setTimeout(() => {
                if (movieSearch.length > 0) {
                    resolve(movieSearch);
                } else {
                    reject([]);
                }
            }, 500);
        });
    }


    const getMovies = async () => {
        console.log('GetMovies');
        console.log(state.searchMovie.length);

        if ( state.searchMovie.length > 0 ) return;
        
        console.log(state.searchMovie.length);

        try{
            const newListMovies = await getMoviesApi(page);
            setListMovies(prevListMovies => prevListMovies.concat(newListMovies));
        } catch{
            setHasMorePage( false );
        }
    }

    const getSearchMovie = async () => {
        
        if(state.searchMovie.length > 0){
            try{
                const filmFound = await searchMovieByName(state.searchMovie);
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
    }, [state.searchMovie]);

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