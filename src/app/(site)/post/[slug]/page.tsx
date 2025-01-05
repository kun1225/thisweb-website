import '@/src/app/_styles/prism.css';

import { notFound } from 'next/navigation';
import {
  PagePost,
  generatePostMetadata,
  generatePostStaticParams,
  getPost,
} from '@/src/pages/post';

export const generateStaticParams = async () => {
  return generatePostStaticParams();
};

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  return generatePostMetadata({ params });
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const currentPost = await getPost({ slug: params.slug });

  if (!currentPost) notFound();

  return <PagePost currentPost={currentPost} />;
}
