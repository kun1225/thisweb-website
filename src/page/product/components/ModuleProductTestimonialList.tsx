// Libs
import { PortableText } from 'next-sanity';
// Types
import type { TypeModuleProductTestimonial } from '@/src/types/typeModules';
import { CiUser } from 'react-icons/ci';
import { hasArrayValue } from '@/src/shared/lib/utils';
// Components
import Carousel from '@/src/shared/ui/Carousel';
import Img from '@/src/shared/ui/Img';

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
    <div className="-mx-edge-dynamic mt-8">
      <Carousel isAutoScroll isAutoplay={false} gap="32px">
        {testimonials.map((item, index) => (
          <div
            className="bg-white-pure flex max-w-xs flex-col justify-between self-stretch rounded-md p-6 shadow-lg lg:max-w-sm"
            key={`${item._key} - ${index}`}
          >
            <div className="m-product__testimonials__quote">
              <PortableText
                value={item.quote}
                //@ts-ignore
                components={customPortableText}
              />
            </div>
            {item.name || item.role ? (
              <div
                className="text-black-light mt-4 grid text-sm"
                style={{
                  gridTemplateAreas: `
                    'avatar name'
                    'avatar role'
                  `,
                  gridTemplateColumns: 'auto 1fr',
                  gridTemplateRows: 'auto auto',
                }}
              >
                {item?.image ? (
                  <div
                    className="mr-2 size-9 self-center rounded-full bg-neutral-100 p-2"
                    style={{ gridArea: 'avatar' }}
                  >
                    <Img image={item?.image} />
                  </div>
                ) : (
                  <CiUser
                    className="mr-2 size-9 self-center rounded-full bg-neutral-100 p-2"
                    style={{ gridArea: 'avatar' }}
                  />
                )}
                {item?.name ? (
                  <p className="font-semibold" style={{ gridArea: 'name' }}>
                    {item.name}
                  </p>
                ) : null}
                {item?.role ? <p style={{ gridArea: 'role' }}>{item.role}</p> : null}
              </div>
            ) : null}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
