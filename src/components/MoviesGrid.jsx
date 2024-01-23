import { movies } from '../utils/servicesApi.js'
import { Card } from './Card.jsx';

export function MoviesGrid() {
    
    return (
        <>
            {movies.map( movie => <Card key={movie.id} movie={movie} />)}
        </>
    )
}