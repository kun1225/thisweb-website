import { format, parseISO } from 'date-fns';

export function PostHeader({
  date,
  title,
  topic,
}: {
  date?: string;
  title: string;
  topic: string;
}) {
  return (
    <header className="p-post__header">
      <PostHeaderDecoration />
      <PostHeaderContent date={date} title={title} topic={topic} />
      <PostHeaderDecoration />
    </header>
  );
}

function PostHeaderDecoration() {
  return <div className="p-post__header__decoration" />;
}

function PostHeaderContent({
  date,
  title,
  topic,
}: {
  date?: string;
  title: string;
  topic: string;
}) {
  return (
    <div className="p-post__header__content">
      <PostHeaderInfo date={date} topic={topic} />
      <PostHeaderTitle title={title} />
      <PostHeaderAuthor />
    </div>
  );
}

function PostHeaderInfo({ date, topic }: { date?: string; topic: string }) {
  return (
    <div className="p-post__header__info">
      {topic ? <p className="uppercase">{topic}</p> : null}
      {date ? (
        <>
          <span className="block">-</span>
          <time dateTime={date}>{format(parseISO(date), 'yyyy / LL / dd')}</time>
        </>
      ) : null}
    </div>
  );
}

function PostHeaderTitle({ title }: { title: string }) {
  return title ? <h1 className="p-post__header__title">{title}</h1> : null;
}

function PostHeaderAuthor() {
  return (
    <div className="p-post__header__author">
      <div className="p-post__header__author__decoration" />
      <p className="p-post__header__author__name">this.web</p>
      <div className="p-post__header__author__decoration" />
    </div>
  );
}
