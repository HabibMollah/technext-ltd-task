import { useState } from 'react';
import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';
import SpaceflightCard from './SpaceflightCard';
import Spinner from './Spinner';
import { Link, useParams } from 'react-router-dom';

export default function SpaceflightList() {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(page || '1'));
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>(currentPage);

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
          <Link
            className="btn btn-primary"
            onClick={() =>
              setCurrentPage(currentPage <= 1 ? currentPage : currentPage - 1)
            }
            to={currentPage <= 1 ? '#' : `/${currentPage - 1}`}>
            Previous
          </Link>
          <Link
            className="btn btn-primary"
            onClick={() =>
              setCurrentPage(currentPage >= 10 ? currentPage : currentPage + 1)
            }
            to={currentPage >= 10 ? '#' : `/${currentPage + 1}`}>
            Next
          </Link>
        </div>
      </>
    );
}
