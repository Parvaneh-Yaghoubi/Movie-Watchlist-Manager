export default function Summary(props) {
    return (
        <div className="card summary">
            <div>Total: {props.total}</div>
            <div>Watched: {props.watched}</div>
            <div>Unwatched: {props.unwatched}</div>
        </div>
    );
}