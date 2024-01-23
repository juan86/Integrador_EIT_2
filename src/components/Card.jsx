import React from 'react'

export const Card = ({ movie }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return  <div className='card'>
                <img src={imgUrl} alt={movie.title} />
                <p>{movie.title}</p>
            </div>;
}