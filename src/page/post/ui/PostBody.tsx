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
        className="flex flex-col-reverse items-center transition xl:flex-row xl:justify-center xl:gap-12"
        style={
          {
            '--top': 'calc(32px + var(--header-height) + var(--announcement-height))',
          } as React.CSSProperties
        }
      >
        <PostSidebar data={data} />
        <PostArticle data={data} />
        <PostToc data={data} />
      </section>
      {/* <PostFooter data={data} /> */}
    </>
  );
}
