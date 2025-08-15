import useSearch from "../contexts/SearchMoviesContext";
import MovieCard from "./MovieCard";

const MoviesList = ({ moviesData }) => {
  const { search } = useSearch();

  const handleMovieClick = (movie) => {
    console.log("Movie clicked:", movie);
    // You can add navigation logic here
    alert(`Clicked on: ${movie.Title} (${movie.Year})`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {search}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the complete collection of movies, series, and games from
            Middle-earth
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {moviesData.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={handleMovieClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {moviesData.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No movies found
            </h3>
            <p className="text-gray-600">
              Try selecting a different filter to see more results.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Built with React and Tailwind CSS • Data from IMDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
