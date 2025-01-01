// Next
import Link from 'next/link';
import { cn } from '@/src/shared/lib/utils';

export default function PostsPagination({
  currentPage,
  totalPages,
  articlesPerPage,
}: {
  currentPage: number;
  totalPages: number;
  articlesPerPage: number;
}) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = currentPage - articlesPerPage - 1; i <= currentPage + articlesPerPage + 1; i++) {
      if (i > 0 && i <= totalPages) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="p-posts__pagination">
      {currentPage > 1 && (
        <Link href={`${currentPage - 2}`}>
          <p className="duration-200 hover:text-secondary">
            <span>← </span> <span className="hidden md:inline">上一頁</span>
          </p>
        </Link>
      )}

      {currentPage > articlesPerPage + 2 && <span>...</span>}

      {getPageNumbers().map((pageNumber) => (
        <Link href={`${pageNumber - 1}`} key={pageNumber}>
          <p
            className={`h-6 w-6 rounded-[50%] text-center ${cn(
              currentPage === pageNumber && 'bg-primary text-white',
              currentPage !== pageNumber && 'duration-100 hover:bg-secondary hover:text-white'
            )} `}
          >
            {pageNumber}
          </p>
        </Link>
      ))}

      {currentPage < totalPages - articlesPerPage - 1 && <span>...</span>}

      {currentPage < totalPages && (
        <Link href={`${currentPage}`}>
          <p className="duration-200 hover:text-secondary">
            <span className="hidden md:inline">下一頁</span> <span> →</span>
          </p>
        </Link>
      )}
    </div>
  );
}
