import { useParams } from 'react-router-dom';
import { movies } from '../utils/servicesApi';
import { GridDetailMovie } from '../components/GridDetailMovie';

export const Movie = () => {
  
  const { id } = useParams();
  const [ movie ] = movies.filter( movie => movie.id == id);
  
  return (
    <section>
        <GridDetailMovie movie={ movie } />
    </section>
  )
}
