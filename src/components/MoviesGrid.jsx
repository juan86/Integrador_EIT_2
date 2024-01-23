import { useEffect, useState } from 'react';
import { movies } from '../utils/servicesApi.js'
import { Card } from './Card.jsx';

export function MoviesGrid({ movieSearch }) {
    
    const [listMovies, setListMovies] = useState(movies);

    const getMovies = () => {
        
        if(movieSearch.length === 0){
            setListMovies(movies);
            return;
        }

        const newListMovies = movies.filter( movie => movie.title.toLowerCase().includes(movieSearch));
        setListMovies(newListMovies);
    }

    useEffect( () => {
        getMovies();
    }, [movieSearch]);

    return (
        <>
            <main className='card-grid'> 
                { listMovies.map(movie => <Card key={movie.id} movie={movie} />) }
            </main>
        </>
    )
}