import { TypePosts } from '@/src/types/typePosts';
import { PostsList } from './PostsList';
import { PostsPagination } from './PostsPagination';

export function PagePosts({
  posts,
  articlesPerPage,
  currentPage,
  totalPages,
}: {
  posts: TypePosts;
  articlesPerPage: number;
  currentPage: number;
  totalPages: number;
}) {
  return (
    <div className="mx-auto min-h-[80vh] pt-4 pb-16">
      <PostsList posts={posts} />
      <PostsPagination
        articlesPerPage={articlesPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
