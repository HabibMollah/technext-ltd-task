export default function Search() {
  return (
    <div className="input-group">
      <div className="form-outline">
        <input className="form-control" type="text" id="search" />
        <label className="visually-hidden form-label" htmlFor="search">
          Search
        </label>
      </div>

      <button className="btn btn-primary" type="button">
        <img src="/search-icon.svg" alt="Search Icon" />
      </button>
    </div>
  );
}
