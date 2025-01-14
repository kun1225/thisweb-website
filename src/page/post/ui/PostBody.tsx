// Components
import { PostArticle } from './PostArticle';
import { PostSidebar } from './PostSidebar';
import { PostFooter } from './PostFooter';
// Types
import { TypePost } from '@/src/types/typePosts';

export function PostBody({ data }: { data: TypePost }) {
  return (
    <>
      <section className="p-post__body">
        <PostArticle data={data} />
        <PostSidebar data={data} />
      </section>
      <PostFooter data={data} />
    </>
  );
}
