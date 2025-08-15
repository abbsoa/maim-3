import { useState } from "react";
import { SearchMoviesContext } from "./SearchMoviesContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const SearchMoviesProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMoviesDetails] = useState();
  const querySearch = search.split(" ").join("+").trim();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getMovieByTitle = async (title) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
      if (!response.ok) {
        throw new Error("error to fetch movies");
      }
      const data = await response.json();

      console.log(data);

      setMovies(data.Search);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const getMovieDetails = async (movieId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `${BASE_URL}?i=${movieId}&apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("error to fetch movies");
      }
      const data = await response.json();

      console.log(data);

      setMoviesDetails(data);
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchMoviesContext.Provider
      value={{
        search,
        setSearch,
        querySearch,
        movies,
        getMovieByTitle,
        getMovieDetails,
        movieDetails,
        loading,
        error,
      }}
    >
      {children}
    </SearchMoviesContext.Provider>
  );
};

export default SearchMoviesProvider;
