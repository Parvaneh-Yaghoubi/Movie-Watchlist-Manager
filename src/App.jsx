import { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import FilterControls from "./components/FilterControls";
import Summary from "./components/Summary";
import "./App.css";

export default function App() {

    const [movies, setMovies] = useState([
        { id: 1, title: "Inception", watched: true, genre: "Sci-Fi" },
        { id: 2, title: "Interstellar", watched: false, genre: "Sci-Fi" },
    ]);

    const [filter, setFilter] = useState("All");
    const [error, setError] = useState("");

    // Derived state
    const totalMovies = movies.length;
    const watchedCount = movies.filter(function (m) {
        return m.watched;
    }).length;
    const unwatchedCount = totalMovies - watchedCount;

    const filteredMovies = movies.filter(function (movie) {
        if (filter === "Watched") return movie.watched;
        if (filter === "Unwatched") return !movie.watched;
        return true;
    });

    function addMovie(movie) {
        const cleanTitle = movie.title.trim();
        const cleanGenre = movie.genre?.trim();

        if (!cleanTitle) return setError("Title is required.");
        
        const newMovie = {
            ...movie,
            title: cleanTitle,
            genre: cleanGenre,
            id: Date.now(),
            watched: false,
        };

        setMovies((prev) => [newMovie, ...prev]);
        setError(""); 

    }

    function toggleWatched(id) {
        setMovies(function (prev) {
            return prev.map(function (m) {
                if (m.id === id) {
                    return { ...m, watched: !m.watched };
                }
                return m;
            });
        });
    }

    function deleteMovie(id) {
        setMovies(function (prev) {
            return prev.filter(function (m) {
                return m.id !== id;
            });
        });
    }

    return (
        <div className="app-container">
            <h1 className="app-title">🎬 Movie Watchlist</h1>

            <MovieForm onAddMovie={addMovie} error={error} />

            <FilterControls filter={filter} setFilter={setFilter} />

            <Summary
                total={totalMovies}
                watched={watchedCount}
                unwatched={unwatchedCount}
            />

            <MovieList
                movies={filteredMovies}
                onToggle={toggleWatched}
                onDelete={deleteMovie}
            />

            {totalMovies > 0 && watchedCount === totalMovies && (
                <p className="success-msg">✅ You watched everything!</p>
            )}
        </div>
    );
}


