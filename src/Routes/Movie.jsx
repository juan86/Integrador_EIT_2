import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../utils/global.context';
import { GridDetailMovie } from '../components/GridDetailMovie';

export const Movie = () => {
  
  const { state, dispatch } = useContext( ContextGlobal );

  const { id } = useParams();
  const [ movie ]  = state.moviesData.filter( movie => movie.id == id);
  
  return (
    <section>
        <GridDetailMovie movie={ movie } />
    </section>
  )
}
