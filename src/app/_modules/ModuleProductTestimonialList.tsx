// Libs
import { hasArrayValue } from '@/src/libs/helpers';
// Components
import Carousel from '../_components/Carousel';
import { PortableText } from 'next-sanity';
// Types
import type { TypeModuleProductTestimonial } from '@/src/types/typeModules';

const customPortableText = {
  block: {
    normal: ({ children }: { children: any }) => {
      return <p>&quot;{children}&quot;</p>;
    },
  },
  marks: {
    highlight: (props: any) => <mark>{props.children}</mark>,
  },
};

export default function ModuleProductTestimonialList({
  data,
}: {
  data: TypeModuleProductTestimonial[];
}) {
  if (!hasArrayValue(data)) return null;

  return (
    <div className="m-product__testimonials__list">
      <Carousel isAutoScroll isAutoplay={false} gap="32px">
        {data.map((item) => (
          <div className="m-product__testimonials__item" key={item._key}>
            <div className="m-product__testimonials__quote">
              <PortableText
                value={item.quote}
                //@ts-ignore
                components={customPortableText}
              />
            </div>
            {item.name || item.role ? (
              <div className="m-product__testimonials__author">
                {item.name ? (
                  <p className="m-product__testimonials__name">{item.name}</p>
                ) : null}
                {item.role ? (
                  <p className="m-product__testimonials__role">{item.role}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </Carousel>
    </div>
  );
}