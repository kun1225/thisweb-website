// Next
import Link from 'next/link'
import clsx from 'clsx'

const BASE_URL = '/articles/page/';

const PaginatedNav = ({
  currentPage,
  totalPages,
  articlesPerPage,
}: {
  currentPage: number
  totalPages: number
  articlesPerPage: number
}) => {

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
    <div className='flex gap-2 md:gap-6 justify-center md:text-sm text-xs'>
      {currentPage > 1 && (
        <Link href={`${BASE_URL}${currentPage - 1}`}>
          <span>← </span> <p className='hidden md:inline'>上一頁</p>
        </Link>
      )}

      {currentPage > articlesPerPage + 2 && (
        <span>...</span>
      )}

      {getPageNumbers().map((pageNumber) => (
        <Link key={pageNumber} href={`${BASE_URL}${pageNumber}`}>
          <p className={`
          md:w-5 w-4 rounded-[50%] text-center
          ${clsx(currentPage === pageNumber && 'text-white bg-primary')}
        `}>{pageNumber}</p>
        </Link>
      ))}

      {currentPage < totalPages - articlesPerPage - 1 && (
        <span>...</span>
      )}

      {currentPage < totalPages && (
        <Link href={`${BASE_URL}${currentPage + 1}`}>
          <p className='hidden md:inline'>下一頁</p> <span> →</span>
        </Link>
      )}
    </div>
  )
}

export default PaginatedNav