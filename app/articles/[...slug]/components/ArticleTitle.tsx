import { format, parseISO } from 'date-fns'

const ArticleTitle = ({
  date,
  title
}: {
  date: string,
  title: string
}) => {
  return (
    <div className="mb-8 text-center">
    <time dateTime={date} className="mb-1 text-xs text-gray-600">
      {format(parseISO(date), 'LLLL d, yyyy')}
    </time>
    <h1 className="text-3xl font-bold">{title}</h1>
  </div>
  )
}

export default ArticleTitle