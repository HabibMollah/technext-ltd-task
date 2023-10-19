import Search from './Search';

export default function Form() {
  return (
    <form>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="upcoming" />
        <label className="form-check-label" htmlFor="upcoming">
          Show upcoming only
        </label>
      </div>

      <Search />

      <div>
        <select className="form-select" aria-label="Sort By Status">
          <option>By Launch Status</option>
          <option>By Something Else</option>
        </select>
      </div>

      <div>
        <select className="form-select" aria-label="Sort By Time">
          <option>By Launch Date</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>
    </form>
  );
}
