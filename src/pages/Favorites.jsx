import { ArrowLeft } from "lucide-react";
import { useFavorites } from "../contexts/FavoriteContext";
import MoviesList from "../components/MovieList";

const FavoritesPage = ({ onMovieClick, onBack }) => {
  const { favorites } = useFavorites();

  console.log(favorites);

  return (
    <div className="min-h-screen bg-black text-white px-8 md:px-16 py-8">
      <button
        onClick={onBack}
        className="flex items-center mb-8 text-gray-300 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Search
      </button>

      <h1 className="text-4xl font-bold mb-8">My List</h1>

      {favorites.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-white text-xl mb-2">No favorites yet</h3>
          <p className="text-gray-400">
            Add movies to your list to see them here
          </p>
        </div>
      ) : (
        <MoviesList
          movies={favorites}
          onMovieClick={onMovieClick}
          loading={false}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
