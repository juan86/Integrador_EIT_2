import { SearchMovies } from './components/SearchMovies';
import { MoviesGrid } from './components/MoviesGrid';

export function App() {
  return(
    <header>
      <h1>Movies</h1>
      <SearchMovies />
      <main className='card-grid'>  
        <MoviesGrid />
      </main>
    </header>
  )
}
