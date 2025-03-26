import type { TypePost } from '@/src/types/typePosts';
import { format, parseISO } from 'date-fns';

export function PostHeader({ data }: { data: TypePost }) {
  const { publishedAt: date, title, category: topic } = data;

  return (
    <header className="mb-12 flex justify-center gap-8">
      <PostHeaderDecoration />
      <PostHeaderContent date={date} title={title} topic={topic} />
      <PostHeaderDecoration />
    </header>
  );
}

function PostHeaderDecoration() {
  return (
    <div
      className="hidden w-[15vw] opacity-0 md:block"
      style={{
        background: 'radial-gradient(rgba(0, 0, 0, 0.5) 1px, transparent 1px) center/ 32px 32px',
        animation: 'fade-in 0.6s linear forwards',
      }}
    />
  );
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
    <div className="grid flex-auto place-content-center gap-12 py-32 text-center md:py-80">
      <PostHeaderInfo date={date} topic={topic} />
      <PostHeaderTitle title={title} />
      <PostHeaderAuthor />
    </div>
  );
}

function PostHeaderInfo({ date, topic }: { date?: string; topic: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-xs text-gray-600 opacity-0 md:flex-row md:gap-4 md:text-sm"
      style={{ animation: 'fade-in 0.6s linear forwards' }}
    >
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
  return title ? (
    <h1
      className="text-3xl font-semibold text-pretty opacity-0 drop-shadow-md md:text-4xl md:leading-relaxed"
      style={{ animation: 'fade-in 0.6s 0.2s linear forwards' }}
    >
      {title}
    </h1>
  ) : null;
}

function PostHeaderAuthor() {
  return (
    <div className="flex items-center justify-center gap-4 md:justify-between md:gap-16">
      <div
        className="inline-block h-[1px] flex-1 origin-left bg-[rgba(0,0,0,0.1)] md:bg-[rgba(0,0,0,0.3)]"
        style={{ animation: 'scale-in-x 1.6s 0.4s ease-in-out forwards', transform: 'scaleX(0)' }}
      />
      <p
        className="text-xs text-gray-600 opacity-0"
        style={{
          animation: 'fade-in 0.6s 0.6s linear forwards',
        }}
      >
        this.web
      </p>
      <div
        className="inline-block h-[1px] flex-1 origin-right bg-[rgba(0,0,0,0.1)] md:bg-[rgba(0,0,0,0.3)]"
        style={{ animation: 'scale-in-x 1.6s 0.4s ease-in-out forwards', transform: 'scaleX(0)' }}
      />
    </div>
  );
}
