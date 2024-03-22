'use client';

// Components
import { PortableText, toPlainText } from '@portabletext/react';
import { RiExternalLinkLine } from 'react-icons/ri';
import Link from 'next/link';
import Refractor from 'react-refractor';
import ImageEnlarger from './ImageEnlarger';
import CodePen from './Codepen';
import { Accordion, AccordionContent, AccordionTitle } from './Accordion';

// Utils
import GithubSlugger from 'github-slugger';
import js from 'refractor/lang/javascript';
import css from 'refractor/lang/css';
import go from 'refractor/lang/go';
import bash from 'refractor/lang/bash';

// Language
Refractor.registerLanguage(js);
Refractor.registerLanguage(css);
Refractor.registerLanguage(go);
Refractor.registerLanguage(bash);

// Utils
import { urlFor } from '@/lib/sanity/client';
import { HTMLAttributes } from 'react';

const slugger = new GithubSlugger();

const linkClassName =
  'inline-block relative z-10 text-secondary duration-200 hover:text-white after:absolute after:inset-x-[-4px] after:inset-y-0 after:bg-secondary after:duration-200 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 after:-z-10';

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
          <RiExternalLinkLine className="inline-block mr-1 mb-1" />
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: { value: any }) => {
      const imageSrc = urlFor(value).width(1080).url();

      return <img src={imageSrc} />;
    },
    // {value}: {value: {code: any}}
    CodeField: (source: any) => {
      const language = source.value.language || 'javascript';
      const title = source.value.filename;

      return (
        <>
          {title ? (
            <>
              <span className="block pl-3 py-1 rounded-t-md border-b-2 text-white text-xs bg-[#2E3440] ">
                {title}
              </span>
              <Refractor
                className="!mt-0 !rounded-t-none"
                language={language}
                value={source.value.code}
                markers={source.highlightedLines}
              />
            </>
          ) : (
            <Refractor
              language={language}
              value={source.value.code}
              markers={source.highlightedLines}
            />
          )}
        </>
      );
    },
  },
};

const myPortableTextComponents = {
  block: {
    h2: ({ children }: { children: string[] }) => {
      const text = children[0]!.replace(/\s+/g, '');
      const id = slugger.slug(text);
      return (
        <h2
          id={id}
          className="mt-10 mb-2 text-2xl font-bold border-b-2 border-gray-200 pb-2"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }: { children: string[] }) => {
      const text = children[0]!.replace(/\s+/g, '');
      const id = slugger.slug(text);
      return (
        <h3 id={id} className="mt-6 text-lg font-bold">
          {children}
        </h3>
      );
    },
    h4: ({ children }: { children: string[] }) => {
      return <h4 className="text-lg">{children}</h4>;
    },
    blockquote: ({ children }: { children: string[] }) => {
      return (
        <p className="px-3 py-1 border-l-4 border-gray-400 bg-slate-100">
          {children}
        </p>
      );
    },
  },

  types: {
    image: ({ value }: { value: any }) => {
      const imageSrc = urlFor(value).width(1080).url();

      return (
        <>
          <ImageEnlarger src={imageSrc} alt="img" />
        </>
      );
    },
    // {value}: {value: {code: any}}
    CodeField: (source: any) => {
      const language = source.value.language || 'javascript';
      const title = source.value.filename;

      return (
        <>
          {title ? (
            <>
              <span className="block -mb-3 rounded-t px-4 pt-1 pb-2 font-[FiraCode] text-sm text-gray-50 bg-slate-600">
                {title}
              </span>
              <Refractor
                className=""
                language={language}
                value={source.value.code}
                markers={source.highlightedLines}
              />
            </>
          ) : (
            <Refractor
              language={language}
              value={source.value.code}
              markers={source.highlightedLines}
            />
          )}
        </>
      );
    },

    Callout: (source: any) => {
      const isExpanded = source.value.isExpanded;
      const bodyLength = toPlainText(source.value.text).length;

      const duration = bodyLength > 500 ? 1.2 : 0.6;

      return isExpanded ? (
        <Accordion
          className="callout bg-gray-100 p-4 mb-6 border-2 border-gray-300 rounded-md shadow-md"
          duration={duration}
          stretch
        >
          <AccordionTitle>{source.value.title}</AccordionTitle>
          <AccordionContent>
            <PortableText
              value={source.value.text}
              //@ts-ignore
              components={calloutComponents}
            />
          </AccordionContent>
        </Accordion>
      ) : (
        <div className="callout bg-gray-100 p-4 mb-6 border-2 border-gray-300 rounded-md shadow-md">
          <p>{source.value.title}</p>
          <PortableText
            value={source.value.text}
            //@ts-ignore
            components={calloutComponents}
          />
        </div>
      );
    },
    Codepen: (source: any) => {
      const url = source.value.url;
      const themeId = source.value.themeId;

      return (
        <div className="mb-4">
          <CodePen url={url} themeId={themeId} />
        </div>
      );
    },
  },
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
          <RiExternalLinkLine className="inline-block mr-1 mb-1" />
          {children}
        </a>
      );
    },
  },
};

const CustomPortableText = (props: any) => {
  return (
    // @ts-ignore
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
};

export default CustomPortableText;
