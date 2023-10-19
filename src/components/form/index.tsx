export default function Form() {
  return (
    <form>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="upcoming" />
        <label className="form-check-label" htmlFor="upcoming">
          Show upcoming only
        </label>
      </div>

      <input className="form-control" type="text" id="search" />
      <label className="visually-hidden form-label" htmlFor="search">
        Search
      </label>

      <select className="form-select" aria-label="Sort By Status">
        <option>By Launch Status</option>
        <option>By Something Else</option>
      </select>

      <select className="form-select" aria-label="Sort By Time">
        <option>By Launch Date</option>
        <option>Last Week</option>
        <option>Last Month</option>
      </select>
    </form>
  );
}
