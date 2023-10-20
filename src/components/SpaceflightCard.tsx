import { SpaceFlight } from '../types/SpaceFlight';

type Props = {
  spaceFlight: SpaceFlight;
};

export default function SpaceflightCard({ spaceFlight }: Props) {
  return (
    <li className="list-group-item">
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
  );
}
