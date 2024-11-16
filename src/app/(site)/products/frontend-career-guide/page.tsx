import {
  getPageFrontendCareerGuideData,
  getPageFrontendCareerGuideDataSharing,
} from '@/src/libs/sanity/fetch/pageFrontendCareerGuideFetch';
// Components
import ModuleProduct from '@/src/app/_modules/ModuleProduct';

export async function generateMetadata() {
  const { metaTitle, metaDesc } = await getPageFrontendCareerGuideDataSharing();

  return {
    title: `${metaTitle} | ThisWeb`,
    description: metaDesc,
    // openGraph: {
    //   title: metaTitle,
    //   description: metaDesc,
    //   images: [shareGraphic],
    // },
  };
}

export default async function Page() {
  const { modules } = await getPageFrontendCareerGuideData();

  return <ModuleProduct modules={modules} />;
}
