'use client';
// Hooks
import useGlobalSettings from '@/app/_hook/useGlobalSettings';

// Utils
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Components
import ImageEnlarger from '@/app/_components/ImageEnlarger';
import RelatedPosts from './RelatedPosts';
import CustomPortableText from '@/app/_components/CustomPortableText';

import { PostType } from '@/lib/sanity/type';
interface PostBodyProps {
  mainImageUrl: string;
  currentPost: PostType;
  relatedPosts: PostType[];
  className?: React.HTMLAttributes<HTMLElement>['className'];
}

const PostBody: React.FC<PostBodyProps> = ({
  mainImageUrl,
  currentPost,
  relatedPosts,
  className = '',
}) => {
  const { isTocCollapsed } = useGlobalSettings();

  return (
    <motion.div
      layout
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={cn(
        'w-full max-w-2xl border-gray-200 xl:border-r-2 xl:px-8',
        isTocCollapsed && 'xl:border-0 xl:flex-1 xl:mx-auto',
        className,
      )}
    >
      {mainImageUrl && <ImageEnlarger src={mainImageUrl} alt="img" />}
      <CustomPortableText value={currentPost.body} />
      <div className="mt-4">
        {relatedPosts && relatedPosts.length > 1 && (
          <div className="mt-16">
            <RelatedPosts
              relatedPosts={relatedPosts}
              currentPostId={currentPost._id}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PostBody;
