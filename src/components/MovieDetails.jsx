import { useEffect } from "react";
import useSearch from "../contexts/SearchMoviesContext";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieDetails, getMovieDetails, loading } = useSearch();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  if (loading) return <h1 className="text-center text-2xl my-8">Loading...</h1>;

  if (!movieDetails)
    return <h1 className="text-center text-2xl my-8">Movie not found</h1>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Movie Poster */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={movieDetails.Poster}
            alt={`${movieDetails.Title} poster`}
            className="w-full rounded-lg shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/300x450?text=No+Poster";
            }}
          />
        </div>

        {/* Movie Info */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-2">
            {movieDetails.Title} ({movieDetails.Year})
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-200 px-2 py-1 rounded text-sm">
              {movieDetails.Rated}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded text-sm">
              {movieDetails.Runtime}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded text-sm">
              {movieDetails.Genre}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded text-sm">
              Released: {movieDetails.Released}
            </span>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Plot</h2>
            <p className="text-gray-700">{movieDetails.Plot}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold">Director</h3>
              <p>{movieDetails.Director}</p>
            </div>
            <div>
              <h3 className="font-semibold">Writers</h3>
              <p>{movieDetails.Writer}</p>
            </div>
            <div>
              <h3 className="font-semibold">Stars</h3>
              <p>{movieDetails.Actors}</p>
            </div>
            <div>
              <h3 className="font-semibold">Languages</h3>
              <p>{movieDetails.Language}</p>
            </div>
            <div>
              <h3 className="font-semibold">Country</h3>
              <p>{movieDetails.Country}</p>
            </div>
            <div>
              <h3 className="font-semibold">Awards</h3>
              <p>{movieDetails.Awards}</p>
            </div>
          </div>

          {/* Ratings */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ratings</h2>
            <div className="flex gap-4">
              {movieDetails.Ratings?.map((rating, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg">
                  <h3 className="font-medium">{rating.Source}</h3>
                  <p className="text-lg">{rating.Value}</p>
                </div>
              ))}
              {movieDetails.imdbRating && (
                <div className="bg-gray-100 p-3 rounded-lg">
                  <h3 className="font-medium">IMDb</h3>
                  <p className="text-lg">{movieDetails.imdbRating}/10</p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-gray-600">
            <p>IMDb ID: {movieDetails.imdbID}</p>
            <p>Type: {movieDetails.Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
