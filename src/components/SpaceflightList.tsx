import { useEffect, useState } from 'react';
import useGetData from '../hooks/useGetData';
import { SpaceFlight } from '../types/SpaceFlight';
import SpaceflightCard from './SpaceflightCard';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import useSearchContext from '../hooks/useSearchContext';

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

export default function SpaceflightList() {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(page || '1'));
  const { data, isLoading, isError } = useGetData<SpaceFlight[]>();
  const [filteredData, setFilteredData] = useState<SpaceFlight[] | undefined>();
  const [offset, setOffset] = useState(0);
  const [paginatedData, setPaginatedData] = useState<
    SpaceFlight[] | undefined
  >();
  const { searchValue } = useSearchContext();

  // Filter the data
  useEffect(() => {
    if (data && searchValue)
      setFilteredData(
        data.filter((spaceFlight) =>
          spaceFlight.rocket.rocket_name.includes(searchValue)
        )
      );
  }, [data, searchValue]);

  // Set the offset for pagination
  useEffect(() => {
    setOffset((currentPage - 1) * 9);
  }, [currentPage]);

  // Set the visible items in the page
  useEffect(() => {
    if (data) {
      if (searchValue && filteredData) {
        setCurrentPage(1);
        setPaginatedData(filteredData.slice(offset, offset + 9));
      } else {
        setPaginatedData(data.slice(offset, offset + 9));
      }
    }
  }, [data, filteredData, offset, searchValue]);

  console.log(filteredData);

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
          {paginatedData?.map((spaceFlight, index) => (
            // There's no unique id for each spaceflight, so I used the index as the key 🙁
            <SpaceflightCard
              key={index}
              spaceFlight={spaceFlight}
              imgSrc={imgSrcList[index % imgSrcList.length]}
            />
          ))}
        </ul>

        <Pagination
          totalPages={
            searchValue && filteredData
              ? Math.ceil(filteredData.length / 9)
              : Math.ceil(data.length / 9)
          }
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
}
