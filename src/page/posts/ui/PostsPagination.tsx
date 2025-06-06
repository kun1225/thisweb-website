// Next
import Link from 'next/link';
import { cn } from '@/src/shared/lib/utils';

export function PostsPagination({
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
    <div className="flex justify-center gap-3 text-base md:gap-6">
      {currentPage > 1 && (
        <Link href={`${currentPage - 2}`}>
          <p className="hover:text-blue-1 duration-200">
            <span>← </span> <span className="hidden md:inline">上一頁</span>
          </p>
        </Link>
      )}

      {currentPage > articlesPerPage + 2 && <span>...</span>}

      {getPageNumbers().map((pageNumber) => (
        <Link href={`${pageNumber - 1}`} key={pageNumber}>
          <p
            className={`h-6 w-6 rounded-[50%] text-center ${cn(
              currentPage === pageNumber && 'bg-blue text-white',
              currentPage !== pageNumber && 'hover:bg-blue-1 duration-100 hover:text-white'
            )} `}
          >
            {pageNumber}
          </p>
        </Link>
      ))}

      {currentPage < totalPages - articlesPerPage - 1 && <span>...</span>}

      {currentPage < totalPages && (
        <Link href={`${currentPage}`}>
          <p className="hover:text-blue-1 duration-200">
            <span className="hidden md:inline">下一頁</span> <span> →</span>
          </p>
        </Link>
      )}
    </div>
  );
}
