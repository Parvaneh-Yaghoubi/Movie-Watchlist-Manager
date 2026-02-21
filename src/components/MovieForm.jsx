import { useState } from "react";

var genres = ["Action", "Drama", "Comedy", "Sci-Fi", "Horror"];

export default function MovieForm({ onAddMovie, error }) {

    var _stateTitle = useState("");
    var title = _stateTitle[0];
    var setTitle = _stateTitle[1];

    var _stateGenre = useState("Action");
    var genre = _stateGenre[0];
    var setGenre = _stateGenre[1];

    function handleSubmit(e) {

        e.preventDefault();

        const newMovie = {
            title: title,
            genre: genre,
            id: crypto.randomUUID(),
            watched: false,
        };

        onAddMovie(newMovie);
        setTitle("");
        setGenre("Action");
    }

    return (
        <form className="card form" onSubmit={handleSubmit}>

            <input
                className="input"
                type="text"
                placeholder="Movie title"
                value={title}
                onChange={function (e) {
                    setTitle(e.target.value);
                }} />

            <select
                className="input"
                value={genre}
                onChange={function (e) {
                    setGenre(e.target.value);
                }}>

                {genres.map(function (g) {
                    return (
                        <option key={g} value={g}>
                            {g}
                        </option>
                    );
                })}
            </select>

            <button className="btn primary" type="submit">
                Add Movie
            </button>

            {error && <p className="error-msg">{error}</p>}
        </form>

    );
}