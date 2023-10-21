import { SpaceFlight } from '../types/SpaceFlight';
import formatDate from '../utils/formatDate';

type Props = {
  spaceFlight: SpaceFlight;
  imgSrc: string;
};

export default function SpaceflightCard({ spaceFlight, imgSrc }: Props) {
  return (
    <li className="w-100">
      <img src={imgSrc} alt={`image of ${imgSrc}`} />
      <p>
        <span>Launch Date:</span> {formatDate(spaceFlight.launch_date_local)}
      </p>
      <div>
        <h4>{spaceFlight.mission_name}</h4>
        <p>{spaceFlight.rocket.rocket_name}</p>
      </div>
      <div>
        <p>Launch Status: </p>
        <span
          className={`status-pill ${
            spaceFlight.launch_success ? 'bg-success' : 'bg-danger'
          }`}>
          {spaceFlight.launch_success ? 'Success' : 'Failure'}
        </span>
      </div>
    </li>
  );
}
