import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'

const ArticlesPage = () => {

  const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className="my-16">
      <h2 className="text-3xl mb-10 pb-2 border-b-2 border-gray-200">文章列表</h2>
      <ul className="flex flex-col gap-10">
        {articles.map(({title, desc, date, url}) => (
          <li key={title}>
            <Link href={url}>
              <h3 className='mb-1 font-bold text-xl'>{title}</h3>
              <p className='mb-2 text-xs text-gray-500 italic font-normal'>{format(parseISO(date), 'LLLL d, yyyy')}</p>
              <p className='text-sm'>{desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ArticlesPage