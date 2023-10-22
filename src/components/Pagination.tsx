import { Link } from 'react-router-dom';
import ChevronRight from './icons/ChevronRight';
import ChevronLeft from './icons/ChevronLeft';

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({ currentPage, setCurrentPage }: Props) {
  const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <ul className="pagination justify-content-center">
      <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}>
        <Link
          className="page-link d-flex h-100 align-items-center"
          onClick={() =>
            setCurrentPage(currentPage <= 1 ? currentPage : currentPage - 1)
          }
          to={currentPage <= 1 ? '#' : `/${currentPage - 1}`}>
          <ChevronLeft />
        </Link>
      </li>

      {pageNumbers.map((pageNumber) => (
        <li
          className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
          <Link
            className="page-link"
            onClick={() => setCurrentPage(pageNumber)}
            to={`/${pageNumber}`}>
            {pageNumber}
          </Link>
        </li>
      ))}
      <li className={`page-item ${currentPage >= 10 ? 'disabled' : ''}`}>
        <Link
          className="page-link d-flex h-100 align-items-center"
          onClick={() =>
            setCurrentPage(currentPage >= 10 ? currentPage : currentPage + 1)
          }
          to={currentPage >= 10 ? '#' : `/${currentPage + 1}`}>
          <ChevronRight />
        </Link>
      </li>
    </ul>
  );
}
