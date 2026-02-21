export default function FilterControls(props) {
  var filter = props.filter;
  var setFilter = props.setFilter;

  var filters = ["All", "Watched", "Unwatched"];

  return (
    <div className="filter-row">
      <select
        className="input"
        value={filter}
        onChange={function (e) {
          setFilter(e.target.value);
        }}>
            
        {filters.map(function (f) {
          return (
            <option key={f} value={f}>
              {f}
            </option>
          );
        })}
      </select>
    </div>
  );
}