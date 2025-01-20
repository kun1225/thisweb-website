// Components
import { PostArticle } from './PostArticle';
import { PostToc } from './PostToc';
import { PostSidebar } from './PostSidebar';
// Types
import { TypePost } from '@/src/types/typePosts';

export function PostBody({ data }: { data: TypePost }) {
  return (
    <>
      <section className="p-post__body">
        <PostToc data={data} />
        <PostArticle data={data} />
        <PostSidebar data={data} />
      </section>
      {/* <PostFooter data={data} /> */}
    </>
  );
}
