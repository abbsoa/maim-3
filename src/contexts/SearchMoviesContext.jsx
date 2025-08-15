import { useContext, createContext } from "react";

export const SearchMoviesContext = createContext();

const useSearch = () => useContext(SearchMoviesContext);

export default useSearch;
