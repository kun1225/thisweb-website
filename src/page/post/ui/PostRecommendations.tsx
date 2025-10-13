import Link from 'next/link';
import { type TypePost } from '@/src/types/typePosts';
import { cn, hasArrayValue } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
import { CustomPortableText } from '@/src/shared/ui/CustomPortableText';
import Img from '@/src/shared/ui/Img';

export function PostRecommendations({ data, className }: { data: TypePost; className?: string }) {
  const { recommendations } = data;

  if (!hasArrayValue(recommendations)) return null;

  return (
    <section className={cn('mt-12 flex flex-col gap-6 xl:mt-0', className)}>
      {recommendations.map((item) => {
        const { imageSection, title, contentSection, _id } = item;

        const hasContent =
          contentSection?.content?.length !== undefined &&
          contentSection?.content?.length > 0 &&
          contentSection?.contentCta?.url !== undefined;

        return (
          <div
            key={_id}
            className="border-gray rounded-md border p-4 shadow-sm md:p-8 xl:px-3 xl:py-4"
          >
            <p className="text-blue mb-2 px-1 font-bold md:mb-6 md:text-2xl xl:mb-2 xl:text-base">
              {title}
            </p>
            <div className="relative">
              <Img image={imageSection?.image} className="rounded-md" imgClassName="rounded-md" />
              {imageSection?.imageCta?.url ? (
                <Link
                  className="bg-blue/80 absolute inset-0 z-10 flex items-center justify-center rounded-md text-sm tracking-wider text-white opacity-0 backdrop-blur-sm transition duration-200 hover:opacity-100 md:text-xl lg:text-sm"
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
      <div className="text-pretty">
        <CustomPortableText value={contentSection?.content} />
      </div>
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
