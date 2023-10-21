import { SpaceFlight } from '../types/SpaceFlight';

type Props = {
  spaceFlight: SpaceFlight;
  imgSrc: string;
};

export default function SpaceflightCard({ spaceFlight, imgSrc }: Props) {
  return (
    <li className="w-100">
      <img src={imgSrc} alt={`image of ${imgSrc}`} />
      <h4>{spaceFlight.mission_name}</h4>
      <span
        className={`status-pill ${
          spaceFlight.launch_success ? 'bg-success' : 'bg-danger'
        }`}>
        {spaceFlight.launch_success ? 'Success' : 'Failure'}
      </span>
    </li>
  );
}
