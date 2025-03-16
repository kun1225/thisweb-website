import '@/src/app/_styles/prism.css';

import { notFound } from 'next/navigation';
import { PagePost, generatePostMetadata, generatePostStaticParams, getPost } from '@/src/page/post';

export const generateStaticParams = async () => {
  return generatePostStaticParams();
};

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  return generatePostMetadata({ params });
};

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = await getPost({ slug: params.slug });

  if (!data) notFound();

  return <PagePost data={data} />;
}
