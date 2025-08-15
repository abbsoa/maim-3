import MoviesList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import useSearch from "../contexts/SearchMoviesContext";

const Home = () => {
  const { movies, loading } = useSearch();
  return (
    <div>
      <SearchBar />
      <MoviesList moviesData={movies} loading={loading} />
    </div>
  );
};

export default Home;
