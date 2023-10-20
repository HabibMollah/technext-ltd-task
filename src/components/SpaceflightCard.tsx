import { SpaceFlight } from '../types/SpaceFlight';

type Props = {
  spaceFlight: SpaceFlight;
};

export default function SpaceflightCard({ spaceFlight }: Props) {
  return (
    <li className="list-group-item">
      <p>{spaceFlight.mission_name}</p>
      <span
        className={`text-white p-1 rounded-pill fs-6 ${
          spaceFlight.launch_success ? 'bg-success' : 'bg-danger'
        }`}>
        {spaceFlight.launch_success ? 'Success' : 'Failure'}
      </span>
    </li>
  );
}
