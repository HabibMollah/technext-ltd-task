import { Link } from 'react-router-dom';
import ChevronRight from './icons/ChevronRight';
import ChevronLeft from './icons/ChevronLeft';
import ThreeDots from './icons/ThreeDots';

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({ currentPage, setCurrentPage }: Props) {
  const totalPages = 10;
  const maxVisiblePages = 3;
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfVisiblePages);
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

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

      {startPage > 1 && (
        <li className="page-item">
          <Link className="page-link" onClick={() => setCurrentPage(1)} to="/1">
            1
          </Link>
        </li>
      )}

      {startPage > 2 && (
        <li className="page-item disabled">
          <a className="page-link d-flex h-100 align-items-center" href="#">
            <ThreeDots />
          </a>
        </li>
      )}

      {pageNumbers.map((pageNumber) => (
        <li
          className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
          key={pageNumber}>
          <Link
            className="page-link"
            onClick={() => setCurrentPage(pageNumber)}
            to={`/${pageNumber}`}>
            {pageNumber}
          </Link>
        </li>
      ))}

      {endPage < totalPages - 1 && (
        <li className="page-item disabled">
          <a href="#" className="page-link d-flex h-100 align-items-center">
            <ThreeDots />
          </a>
        </li>
      )}

      {endPage < totalPages && (
        <li className="page-item">
          <Link
            className="page-link"
            onClick={() => setCurrentPage(totalPages)}
            to={`/${totalPages}`}>
            {totalPages}
          </Link>
        </li>
      )}

      <li
        className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
        <Link
          className="page-link d-flex h-100 align-items-center"
          onClick={() =>
            setCurrentPage(
              currentPage >= totalPages ? currentPage : currentPage + 1
            )
          }
          to={currentPage >= totalPages ? '#' : `/${currentPage + 1}`}>
          <ChevronRight />
        </Link>
      </li>
    </ul>
  );
}
