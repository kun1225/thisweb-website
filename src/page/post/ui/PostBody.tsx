// Components
import { PostArticle } from './PostArticle';
import { PostToc } from './PostToc';
import { PostSidebar } from './PostSidebar';
// Types
import { TypePost } from '@/src/types/typePosts';

export function PostBody({ data }: { data: TypePost }) {
  return (
    <>
      <section
        className="flex flex-col items-center transition xl:flex-row xl:justify-center"
        style={{ '--top': 'calc(32px + var(--header-height))' } as React.CSSProperties}
      >
        <PostToc data={data} />
        <PostArticle data={data} />
        <PostSidebar data={data} />
      </section>
      {/* <PostFooter data={data} /> */}
    </>
  );
}
