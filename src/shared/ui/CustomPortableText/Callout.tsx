import { PortableText, toPlainText } from 'next-sanity';
import Link from 'next/link';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Accordion, AccordionContent, AccordionTitle } from '../Accordion';
import { CodeField } from './CodeField';
import { PortableImg } from './PortableImg';

const linkClassName =
  'inline-block relative z-10 text-blue-1 duration-200 hover:text-white after:absolute after:inset-x-[-4px] after:inset-y-0 after:bg-blue-1 after:duration-200 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 after:-z-10';

const calloutComponents = {
  marks: {
    internalLink: ({ value, children }: { value: any; children: any }) => {
      const { slug = {} } = value;
      const href = `posts/${slug.current}`;

      return (
        <Link className={linkClassName} href={href} target="_blank">
          {children}
        </Link>
      );
    },
    link: ({ value, children }: { value: any; children: any }) => {
      const { href } = value;
      return (
        <a href={href} target="_blank" rel="noopener" className={linkClassName}>
          <RiExternalLinkLine className="mr-1 mb-1 inline-block" />
          {children}
        </a>
      );
    },
    highlight: (props: any) => <mark>{props.children}</mark>,
  },
  types: {
    image: PortableImg,
    CodeField,
  },
};

export function Callout(source: any) {
  const isExpanded = source.value.isExpanded;
  const bodyLength = (source.value.text && toPlainText(source.value.text).length) || 0;

  const duration = bodyLength > 500 ? 1.2 : 0.6;

  return isExpanded ? (
    <Accordion
      className="border-gray my-5 rounded-lg border bg-gray-100 px-4 shadow"
      duration={duration}
      stretch
    >
      <AccordionTitle className="font-semibold">{source.value.title}</AccordionTitle>
      <AccordionContent>
        <PortableText
          value={source.value.text}
          //@ts-ignore
          components={calloutComponents}
        />
      </AccordionContent>
    </Accordion>
  ) : (
    <div className="border-gray my-5 rounded border bg-gray-100 px-4 shadow">
      <p className="font-semibold">{source.value.title}</p>
      <PortableText
        value={source.value.text}
        //@ts-ignore
        components={calloutComponents}
      />
    </div>
  );
}
