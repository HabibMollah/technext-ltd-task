import Form from './components/form';
import useGetData from './hooks/useGetData';
import { SpaceFlight } from './types/SpaceFlight';

export default function App() {
  const { data } = useGetData<SpaceFlight[]>();

  console.log(data);
  return (
    <main>
      <div>
        <h2>Spaceflight details</h2>
        <p>Find out the elaborate features of all the past big spaceflights.</p>
      </div>
      <Form />

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
    </main>
  );
}
