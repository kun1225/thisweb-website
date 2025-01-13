import CustomPortableText from '@/src/shared/ui/CustomPortableText';
// Types
import { TypePost } from '@/src/types/typePosts';

export function PostArticle({ currentPost }: { currentPost: TypePost }) {
  return (
    <div className="p-post__article">
      <CustomPortableText value={currentPost.body} />
    </div>
  );
}
