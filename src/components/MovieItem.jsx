export default function MovieItem(props) {
    var movie = props.movie;
    var onToggle = props.onToggle;
    var onDelete = props.onDelete;

    return (
        <li className="card list-item">
            <div>
                <strong>{movie.title}</strong>
                <div className="meta">
                    {movie.genre} • {movie.watched ? "Watched" : "Unwatched"}
                </div>
            </div>

            <div className="actions">
                <button
                    className="btn secondary"
                    onClick={function () {
                        onToggle(movie.id);
                    }}>

                    {movie.watched ? "Unwatched" : "Watched"}
                </button>
                <button
                    className="btn danger"
                    onClick={function () {
                        onDelete(movie.id);
                    }}>

                    Delete
                </button>
            </div>
        </li>
    );
}