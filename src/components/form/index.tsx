import useLaunchStatusContext from '../../hooks/useLaunchStatusContext';
import Checkbox from './Checkbox';
import Search from './Search';
import Select from './Select';

export default function Form() {
  const { launchStatus, setLaunchStatus } = useLaunchStatusContext();

  console.log(launchStatus);
  return (
    <form>
      <Checkbox />
      <Search />

      <Select
        value={launchStatus}
        setValue={setLaunchStatus}
        label="Filter by Status">
        <option value="">By Launch Status</option>
        <option value="success">Success</option>
        <option value="failure">Failure</option>
      </Select>

      {/* <Select value="" setValue={setLaunchStatus} label="Filter By Time">
        <option>By Launch Date</option>
        <option>Last Week</option>
        <option>Last Month</option>
        <option>Last Year</option>
      </Select> */}
    </form>
  );
}
