import { useState } from 'react';
import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';
import SpaceflightCard from './SpaceflightCard';
import Spinner from './Spinner';

export default function SpaceflightList() {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>(offset);

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

  if (isError)
    return (
      <div className="alert alert-danger" role="alert">
        Something went wrong! Please try again.
      </div>
    );

  if (isLoading) return <Spinner />;
  if (data)
    return (
      <>
        <ul>
          {data?.map((spaceFlight, index) => (
            // There's no unique id for each spaceflight, so I used the index as the key 🙁
            <SpaceflightCard
              key={index}
              spaceFlight={spaceFlight}
              imgSrc={imgSrcList[index % imgSrcList.length]}
            />
          ))}
        </ul>

        <div className="d-flex gap-2 justify-content-center">
          <button
            className="btn btn-primary"
            disabled={offset <= 0}
            onClick={() => {
              if (offset > 0) setOffset(offset - 9);
            }}>
            Previous
          </button>
          <button
            className="btn btn-primary"
            disabled={offset >= 108}
            onClick={() => {
              if (offset < 108) setOffset(offset + 9);
            }}>
            Next
          </button>
        </div>
      </>
    );
}
