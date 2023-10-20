import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';

export default function SpaceflightList() {
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>();

  console.log(data, isLoading, isError);

  return (
    <ul className="list-group">
      {data?.map((spaceFlight, index) => (
        // There's no unique id for each spaceflight, so I used the index as the key 🙁
        <li className="list-group-item" key={index}>
          <p>{spaceFlight.mission_name}</p>
          {spaceFlight.launch_success ? (
            <span className="bg-success text-white p-1 rounded-pill fs-6">
              Success
            </span>
          ) : (
            <span className="bg-danger text-white p-1 rounded-pill fs-6">
              Failure
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
