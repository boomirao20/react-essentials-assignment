import { useState } from "react";
import moviesData from "./component/movieData";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (movie) => {
    setFavorites(prev =>
      prev.some(m => m.id === movie.id)
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <div className="wrapper">
      {/* Header */}
      <div className="header">
        <div>
          <h1>Movie Explorer</h1>
          <p>Search, filter, and favorite movies. Designed for a single-page React component structure.</p>
        </div>
        <span className="tag">Local data · React state ready</span>
      </div>

      {/* Search */}
      <div className="search-row">
        <input
          placeholder='Search movies (e.g. "Interstellar", "Star")'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="reset" onClick={() => setSearch("")}>Reset</button>
      </div>

      {/* Result Count */}
      {search && (
        <p className="count">
          {filteredMovies.length} results for "{search}"
        </p>
      )}

      <div className="content">
        {/* Matching Movies */}
        <div>
          <h3>Matching Movies</h3>
          <small>Filtered from local movie data</small>

          {/* Conditional Rendering */}
          {!search && <p className="hint">No input → show hint</p>}

          {search && filteredMovies.length === 0 && (
            <p className="empty">No movies found</p>
          )}

          {filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <div>
                <strong>{movie.title}</strong>
                <span className="meta">
                  {movie.year} · {movie.genre}
                </span>

                <div className="rating">⭐ {movie.rating}</div>

                <div className="tags">
                  {movie.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>

              <button
                className={
                  favorites.some(f => f.id === movie.id)
                    ? "fav active"
                    : "fav"
                }
                onClick={() => toggleFavorite(movie)}
              >
                {favorites.some(f => f.id === movie.id)
                  ? "❤️ Favorited"
                  : "🤍 Favorite"}
              </button>
            </div>
          ))}
        </div>

        {/* Favorite Movies */}
        <div>
          <h3>Favorite Movies</h3>
          <small>Derived from favorite state</small>

          {favorites.length === 0 ? (
            <p className="hint">
              You haven't added any favorites yet.
            </p>
          ) : (
            favorites.map(movie => (
              <p key={movie.id}>
                ❤️ {movie.title} ({movie.year})
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


export default App;