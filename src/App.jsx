import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<div>not found page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
