export default function Search() {
  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        id="search"
        placeholder="Search..."
      />
      <label className="visually-hidden form-label" htmlFor="search">
        Search
      </label>

      <button className="btn btn-primary" type="button">
        <img src="/search-icon.svg" alt="Search Icon" />
      </button>
    </div>
  );
}
