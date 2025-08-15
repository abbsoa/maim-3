import { Calendar, Film, Info, Star } from "lucide-react";
import { useFavorites } from "../contexts/FavoriteContext";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const isInFavorites = isFavorite(movie.imdbID);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isInFavorites) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105">
      {/* Poster Image */}
      <button onClick={handleFavoriteClick}>add fav</button>
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        {console.log(movie.Poster)}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-full object-cover duration-300"
          loading="lazy"
        />

        {/* <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center text-gray-500">
              <Film className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">No Image</p>
            </div>
          </div> */}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Link
              to={`/movie/${movie.imdbID}`}
              className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <Info className="w-4 h-4" />
              View Details
            </Link>
          </div>
        </div>

        {/* Type Badge */}
        <div
          className={`absolute top-3 left-3  text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}
        >
          <span className="capitalize">{movie.Type}</span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {movie.Title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-600">
            <Calendar className="w-3 h-3" />
            <span className="text-xs font-medium">{movie.Year}</span>
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-medium text-gray-600">IMDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
