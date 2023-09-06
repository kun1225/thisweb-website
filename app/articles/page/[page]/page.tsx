"use client"

// Next
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Lib
import { format, parseISO } from 'date-fns'
import { sortArticleByDate, filterActiveArticles, composeWithInitialValue } from '@/lib/lib'

// ContentLayer
import { allArticles } from 'contentlayer/generated'

// Components
import EmptyPage from './components/EmptyPage'
import PaginatedNav from './components/PaginatedNav'

const ARTICLES_PER_PAGE = 10;

const ArticlesPage = () => {

  // filter article by page
  // start with 1, and there are ten articles per page
  // page = 1, article = 0 ~ 9 ; page = 2, article = 10 ~ 19 ...
  const { page } = useParams();
  const numPage = parseInt(page as string);

  const startIndex = (numPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = numPage * ARTICLES_PER_PAGE
    
  const articles = composeWithInitialValue(
    allArticles,
    filterActiveArticles,
    sortArticleByDate,
  );
  
  const paginatedPosts = articles.slice(startIndex, endIndex);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return (
    <main className="my-16">
      <h2 className="text-3xl mb-10 pb-2 border-b-2 border-gray-200">文章列表</h2>
      <ul className="flex flex-col gap-10 mb-16">
        {paginatedPosts.length > 0
          ? paginatedPosts.map(({ title, desc, date, url }) => (
            <li key={title}>
              <Link href={url}>
                <h3 className='mb-1 font-bold text-xl'>{title}</h3>
                <p className='mb-2 text-xs text-gray-500 italic font-normal'>{format(parseISO(date), 'LLLL d, yyyy')}</p>
                <p className='text-sm'>{desc}</p>
              </Link>
            </li>
          ))
          :
        <EmptyPage />
        }
      </ul>

      {paginatedPosts.length > 0 && <PaginatedNav currentPage={numPage} totalPages={totalPages} articlesPerPage={ARTICLES_PER_PAGE}/>}
    </main>
  )
}

export default ArticlesPage