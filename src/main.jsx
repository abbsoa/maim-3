import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FavoritesProvider from "./contexts/FavoritesProvider.jsx";
import SearchMoviesProvider from "./contexts/SearchMoviesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <SearchMoviesProvider>
        <App />
      </SearchMoviesProvider>
    </FavoritesProvider>
  </StrictMode>
);
