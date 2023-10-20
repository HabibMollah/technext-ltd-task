export default function Checkbox() {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="upcoming" />
      <label className="form-check-label" htmlFor="upcoming">
        Show upcoming only
      </label>
    </div>
  );
}
