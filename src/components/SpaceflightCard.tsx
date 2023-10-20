import { SpaceFlight } from '../types/SpaceFlight';

type Props = {
  spaceFlight: SpaceFlight;
};

export default function SpaceflightCard({ spaceFlight }: Props) {
  return (
    <li className="w-100">
      <p>{spaceFlight.mission_name}</p>
      <span
        className={`status-pill ${
          spaceFlight.launch_success ? 'bg-success' : 'bg-danger'
        }`}>
        {spaceFlight.launch_success ? 'Success' : 'Failure'}
      </span>
    </li>
  );
}