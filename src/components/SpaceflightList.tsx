import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';
import SpaceflightCard from './SpaceflightCard';

export default function SpaceflightList() {
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>();

  console.log(data, isLoading, isError);

  const imgSrcList = [
    'falcon-sat.png',
    'demo-sat.png',
    'traliblazer.png',
    'rat-sat.png',
    'razak-sat.png',
    'f9-test-flight.png',
    'cots-1.png',
    'cots-2.png',
    'crs-1.png',
  ];

  return (
    <ul className="">
      {data?.map((spaceFlight, index) => (
        // There's no unique id for each spaceflight, so I used the index as the key 🙁
        <SpaceflightCard
          key={index}
          spaceFlight={spaceFlight}
          imgSrc={imgSrcList[index % imgSrcList.length]}
        />
      ))}
    </ul>
  );
}
