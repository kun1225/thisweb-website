import Img from '@/src/shared/ui/Img';
import { Button } from '@/src/shared/ui/Button';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';

import { hasArrayValue } from '@/src/shared/lib/utils';
import type { TypePost } from '@/src/types/typePosts';
import Link from 'next/link';

export function PostSidebarRecommendations({ data }: { data: TypePost }) {
  const { sideBarRecommendations } = data;

  if (!hasArrayValue(sideBarRecommendations)) return null;

  return (
    <div className="p-post__sidebar__recommendations">
      {sideBarRecommendations.map((item) => {
        const { imageSection, title, _key, contentSection } = item;

        return (
          <div key={_key} className="p-post__sidebar__recommendation">
            <p className="p-post__sidebar__recommendation__title">{title}</p>
            <div className="p-post__sidebar__recommendation__img">
              <Img image={imageSection?.image} />
              {imageSection?.imageCta?.url ? (
                <Link
                  className="p-post__sidebar__recommendation__img__cta"
                  href={imageSection?.imageCta?.url}
                  target={imageSection?.imageCta?.isOpenNewTab ? '_blank' : '_self'}
                >
                  {imageSection?.imageCta?.label || ''}
                </Link>
              ) : null}
            </div>
            <div className="p-post__sidebar__recommendation__content">
              <CustomPortableText value={contentSection?.content} />
              {contentSection?.contentCta?.url ? (
                <Button
                  className="mt-2 w-full"
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
          </div>
        );
      })}
    </div>
  );
}
