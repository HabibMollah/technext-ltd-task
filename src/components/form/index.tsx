import Checkbox from './Checkbox';
import Search from './Search';
import Select from './Select';

export default function Form() {
  return (
    <form>
      <Checkbox />
      <Search />

      <Select label="Filter by Status">
        <option>By Launch Status</option>
        <option>Success</option>
        <option>Failure</option>
      </Select>

      <Select label="Filter By Time">
        <option>By Launch Date</option>
        <option>Last Week</option>
        <option>Last Month</option>
        <option>Last Year</option>
      </Select>
    </form>
  );
}
