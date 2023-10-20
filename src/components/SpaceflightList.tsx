import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';
import SpaceflightCard from './SpaceflightCard';

export default function SpaceflightList() {
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>();

  console.log(data, isLoading, isError);

  return (
    <ul className="">
      {data?.map((spaceFlight, index) => (
        // There's no unique id for each spaceflight, so I used the index as the key 🙁
        <SpaceflightCard key={index} spaceFlight={spaceFlight} />
      ))}
    </ul>
  );
}
