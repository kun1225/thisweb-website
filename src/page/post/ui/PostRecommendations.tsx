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
    <div className={cn('p-post__recommendations', className)}>
      {recommendations.map((item) => {
        const { imageSection, title, _key, contentSection } = item;

        const hasContent =
          contentSection?.content?.length &&
          contentSection?.content?.length > 0 &&
          contentSection?.contentCta?.url;

        return (
          <div key={_key} className="p-post__recommendation">
            <p className="p-post__recommendation__title">{title}</p>
            <div className="p-post__recommendation__img">
              <Img image={imageSection?.image} />
              {imageSection?.imageCta?.url ? (
                <Link
                  className="p-post__recommendation__img__cta"
                  href={imageSection?.imageCta?.url}
                  target={imageSection?.imageCta?.isOpenNewTab ? '_blank' : '_self'}
                >
                  {imageSection?.imageCta?.label || ''}
                </Link>
              ) : null}
            </div>
            {hasContent ? (
              <div className="p-post__recommendation__content">
                <CustomPortableText value={contentSection?.content} />
                {contentSection?.contentCta?.url ? (
                  <Button
                    className="p-post__recommendation__cta"
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
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
