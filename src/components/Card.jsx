import { Link } from 'react-router-dom';
import './Card.css'

export const Card = ({ movie }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
        <div className='card'>
            <Link to={`/movie/${movie.id}`}>
                <img src={imgUrl} alt={movie.title} />
            </Link>
            <p>{movie.title}</p>
        </div>
    ) 
        
}