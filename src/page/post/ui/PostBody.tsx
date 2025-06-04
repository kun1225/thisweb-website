// Components
// Types
import { TypePost } from '@/src/types/typePosts';
import { PostArticle } from './PostArticle';
import { PostSidebar } from './PostSidebar';
import { PostToc } from './PostToc';

export function PostBody({ data }: { data: TypePost }) {
  return (
    <>
      <section
        className="flex flex-col items-center transition xl:flex-row xl:justify-center"
        style={
          {
            '--top': 'calc(32px + var(--header-height) + var(--announcement-height))',
          } as React.CSSProperties
        }
      >
        <PostToc data={data} />
        <PostArticle data={data} />
        <PostSidebar data={data} />
      </section>
      {/* <PostFooter data={data} /> */}
    </>
  );
}
