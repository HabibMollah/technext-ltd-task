import { useEffect, useState } from 'react';
import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';
import SpaceflightCard from './SpaceflightCard';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

import Pagination from './Pagination';

export default function SpaceflightList() {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(page || '1'));
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>();
  const [offset, setOffset] = useState(0);
  const [paginatedData, setPaginatedData] = useState<
    SpaceFlight[] | undefined
  >();

  useEffect(() => {
    setOffset((currentPage - 1) * 9);
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      setPaginatedData(data.slice(offset, 9));
    }
  }, [data, offset]);

  console.log(currentPage);
  console.log(offset);
  console.log(paginatedData);

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
        <ul className="launch-list">
          {data?.map((spaceFlight, index) => (
            // There's no unique id for each spaceflight, so I used the index as the key 🙁
            <SpaceflightCard
              key={index}
              spaceFlight={spaceFlight}
              imgSrc={imgSrcList[index % imgSrcList.length]}
            />
          ))}
        </ul>

        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
    );
}
