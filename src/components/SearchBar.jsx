import { Search } from "lucide-react";
import useSearch from "../contexts/SearchMoviesContext";

const SearchBar = () => {
  const { querySearch, search, setSearch, getMovieByTitle, loading } =
    useSearch();
  const handleSearch = async () => {
    await getMovieByTitle(querySearch);
  };
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="search"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 pl-14 text-lg bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
        >
          {loading ? "searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
