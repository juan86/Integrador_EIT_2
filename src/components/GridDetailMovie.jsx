import { useNavigate } from 'react-router-dom';
import './GridDetailMovie.css'

export const GridDetailMovie = ( { movie } ) => {
    const cardImage = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${ movie.poster_path }`;
    const navigate = useNavigate();

    const imagenFondo = {
        '--opacidad-negro': '0.5',
        backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),url("https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'rigth',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: '50px 30px'
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <>
            <button onClick={handleBackClick}>Atras</button>
            <div style={ imagenFondo }>
                <div>
                    <img className='img-detail-movie' src={cardImage} alt={movie.title} />
                </div>
                <div>
                    <div className="title-detail-movie">
                        <h2>{movie.title}</h2>
                    </div>
                    <div className="text-detail-movie">
                        <p><span>Fecha: </span>{movie.release_date}</p>
                        <h3>Vista General</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
