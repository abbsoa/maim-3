import { useState } from "react";
import { FavoritesContext } from "./FavoriteContext";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('movieFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  const addToFavorites = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    localStorage.setItem('movieFavorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (movieId) => {
    const newFavorites = favorites.filter(movie => movie.imdbID !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem('movieFavorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.imdbID === movieId);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;