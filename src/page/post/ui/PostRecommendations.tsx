import { hasArrayValue, cn } from '@/src/shared/lib/utils';

import Img from '@/src/shared/ui/Img';
import { Button } from '@/src/shared/ui/Button';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';

import type { TypePost } from '@/src/types/typePosts';
import Link from 'next/link';

export function PostRecommendations({ data, className }: { data: TypePost; className?: string }) {
  const { recommendations } = data;

  if (!hasArrayValue(recommendations)) return null;

  return (
    <section className={cn('mt-12 flex-col gap-6 xl:mt-0', className)}>
      {recommendations.map((item) => {
        const { imageSection, title, _key, contentSection } = item;

        const hasContent =
          contentSection?.content?.length !== undefined &&
          contentSection?.content?.length > 0 &&
          contentSection?.contentCta?.url !== undefined;

        return (
          <div key={_key} className="rounded-md border border-gray-200 p-4 shadow md:p-8 xl:p-3.5">
            <p className="mb-2 px-1 font-bold text-blue md:mb-6 md:text-2xl xl:mb-2 xl:text-base">
              {title}
            </p>
            <div className="relative">
              <Img image={imageSection?.image} />
              {imageSection?.imageCta?.url ? (
                <Link
                  className="absolute inset-0 z-10 flex items-center justify-center bg-blue/80 text-sm tracking-wider text-white opacity-0 backdrop-blur-sm transition duration-200 hover:opacity-100 md:text-xl lg:text-sm"
                  href={imageSection?.imageCta?.url}
                  target={imageSection?.imageCta?.isOpenNewTab ? '_blank' : '_self'}
                >
                  {imageSection?.imageCta?.label || ''}
                </Link>
              ) : null}
            </div>
            <PostRecommendationContent hasContent={hasContent} contentSection={contentSection} />
          </div>
        );
      })}
    </section>
  );
}

function PostRecommendationContent({
  hasContent,
  contentSection,
}: {
  hasContent: boolean;
  contentSection: TypePost['recommendations'][0]['contentSection'];
}) {
  return hasContent ? (
    <div className="p-post__recommendation__content mt-3 px-2 text-sm text-gray-500 md:text-base xl:text-sm">
      <CustomPortableText value={contentSection?.content} />
      {contentSection?.contentCta?.url ? (
        <Button
          className="mt-3 w-full md:mt-4 md:py-2 xl:mt-3 xl:py-1"
          variant="outline"
          asChild
          size="sm"
          disabled={contentSection?.contentCta?.isDisabled}
        >
          <Link
            href={contentSection?.contentCta?.url}
            target={contentSection?.contentCta?.isOpenNewTab ? '_blank' : '_self'}
          >
            {contentSection?.contentCta?.label || ''}
          </Link>
        </Button>
      ) : null}
    </div>
  ) : null;
}
