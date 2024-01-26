import { useParams } from 'react-router-dom';
import { searchMovieById } from '../utils/servicesApi';
import { GridDetailMovie } from '../components/GridDetailMovie';

export const Movie = () => {
  
  const { id } = useParams();
  const [ movie ] = searchMovieById(id);
  
  return (
    <section>
        <GridDetailMovie movie={ movie } />
    </section>
  )
}
