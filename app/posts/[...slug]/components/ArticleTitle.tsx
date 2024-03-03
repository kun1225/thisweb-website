import { format, parseISO } from 'date-fns';

interface ArticleTitleProp {
  date: string;
  title: string;
  topic: string;
}

const ArticleTitle: React.FC<ArticleTitleProp> = ({ date, title, topic }) => {
  return (
    <section className="flex gap-16 justify-center mb-32">
      {/* decoration */}
      <div className="hidden md:block w-40 title-deco"></div>

      <div className="flex-auto text-center min-h-[70vh] md:min-h-[80vh] grid place-content-center">
        {/* title and date */}
        <div className="mb-16 text-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <p className="uppercase">{topic}</p>
            <span className="hidden md:block">-</span>
            <time className="text-gray-600" dateTime={date}>
              {format(parseISO(date), 'LLLL d, yyyy')}
            </time>
          </div>
          {/* title */}
          <h1 className="text-3xl md:leading-relaxed md:text-4xl  font-bold drop-shadow-md">
            {title}
          </h1>
        </div>
        {/* author */}
        <div className="flex justify-between items-center gap-4 md:gap-16">
          <div className="flex-1 bg-gray-200 h-[1px] inline-block"></div>
          <p className="text-xs text-gray-600">this.web</p>
          <div className="flex-1 bg-gray-200 h-[1px] inline-block"></div>
        </div>
      </div>

      {/* decoration */}
      <div className="hidden md:block w-40 title-deco"></div>
    </section>
  );
};

export default ArticleTitle;
