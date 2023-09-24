import { format, parseISO } from 'date-fns';

const ArticleTitle = ({ date, title }: { date: string; title: string }) => {
  return (
    <div className="mb-8 lg:mb-16 text-center">
      <time dateTime={date} className="text-xs text-gray-600">
        {format(parseISO(date), 'LLLL d, yyyy')}
      </time>
      <h1 className="mt-4 text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default ArticleTitle;
