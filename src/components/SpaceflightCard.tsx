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
      <p className="mb-2">
        <span>Launch Date:</span> {formatDate(spaceFlight.launch_date_local)}
      </p>
      <div className="spaceflight">
        <h4 className="m-0">{spaceFlight.mission_name}</h4>
        <p className="m-0">{spaceFlight.rocket.rocket_name}</p>
      </div>
      <div className="status">
        <p className="mb-1">Launch Status: </p>
        <span
          className={spaceFlight.launch_success ? 'bg-success' : 'bg-danger'}>
          {spaceFlight.launch_success ? 'Success' : 'Failure'}
        </span>
      </div>
    </li>
  );
}
