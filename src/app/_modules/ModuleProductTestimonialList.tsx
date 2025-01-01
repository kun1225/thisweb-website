// Libs
import { hasArrayValue } from '@/src/shared/lib/utils';
// Components
import Carousel from '@/src/shared/ui/Carousel';
import { PortableText } from 'next-sanity';
import Img from '@/src/shared/ui/Img';
import { CiUser } from 'react-icons/ci';
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

  const testimonials = [...data, ...data, ...data];

  return (
    <div className="m-product__testimonials__list">
      <Carousel isAutoScroll isAutoplay={false} gap="32px">
        {testimonials.map((item, index) => (
          <div className="m-product__testimonials__item" key={`${item._key} - ${index}`}>
            <div className="m-product__testimonials__quote">
              <PortableText
                value={item.quote}
                //@ts-ignore
                components={customPortableText}
              />
            </div>
            {item.name || item.role ? (
              <div className="m-product__testimonials__author">
                {item?.image ? (
                  <div className="m-product__testimonials__avatar">
                    <Img image={item?.image} />
                  </div>
                ) : (
                  <CiUser className="m-product__testimonials__avatar" />
                )}
                {item?.name ? <p className="m-product__testimonials__name">{item.name}</p> : null}
                {item?.role ? <p className="m-product__testimonials__role">{item.role}</p> : null}
              </div>
            ) : null}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
