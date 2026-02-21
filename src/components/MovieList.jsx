import MovieItem from "./MovieItem";

export default function MovieList(props) {
    var movies = props.movies;
    var onToggle = props.onToggle;
    var onDelete = props.onDelete;

    if (movies.length === 0) {
        return <p className="empty">No movies found. Add one!</p>;
    }

    return (
        <ul className="list">
            {movies.map(function (movie) {
                return (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onToggle={onToggle}
                        onDelete={onDelete} />
                );
            })}
        </ul>
    );
}