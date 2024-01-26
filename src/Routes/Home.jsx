import { SearchMovies } from "../components/SearchMovies";
import { MoviesGrid } from "../components/MoviesGrid";

export const Home = () => {

    return (
            <header>
                <h1>Movies</h1>
                <SearchMovies />
                <MoviesGrid />
            </header>
    )
}