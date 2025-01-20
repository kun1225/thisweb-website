import { getPost } from '../api/apiPost';
import { imgBuilder } from '@/src/shared/lib/sanity';
import { toPlainText } from 'next-sanity';

export const generatePostMetadata = async ({ params }: { params: { slug: string } }) => {
  const currentPost = await getPost({ slug: params.slug });

  if (!currentPost)
    return {
      title: '404 | 請網這邊走 ThisWeb',
    };

  const shareGraphicUrl = currentPost?.sharing?.shareGraphic
    ? imgBuilder.image(currentPost?.sharing?.shareGraphic).url()
    : false;
  const author = 'ThisWeb 請網這邊走';

  return {
    title: `${currentPost.title} | ThisWeb`,
    description: toPlainText(currentPost.body).slice(0, 75),
    author,
    creator: author,
    publisher: author,
    applicationName: author,
    openGraph: {
      title: `${currentPost.title} | ThisWeb`,
      description: toPlainText(currentPost.body).slice(0, 75),
      images: [shareGraphicUrl || '/public/ThisWeb-OG-Image.jpg'],
      url: `https://thisweb.dev/post/${params.slug}`,
      siteName: author,
      locale: 'zh-hant',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${currentPost.title} | ThisWeb`,
      description: toPlainText(currentPost.body).slice(0, 75),
      creator: author,
      images: [shareGraphicUrl || '/public/ThisWeb-OG-Image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  };
};
