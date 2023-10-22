import useSearchContext from '../../hooks/useSearchContext';

export default function Search() {
  const { searchValue, setSearchValue } = useSearchContext();
  return (
    <div className="input-group">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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
