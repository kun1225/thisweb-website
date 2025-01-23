'use client';

// Components
import { PortableText, toPlainText } from '@portabletext/react';
import { RiExternalLinkLine } from 'react-icons/ri';
import Link from 'next/link';
import { Refractor, registerLanguage } from 'react-refractor';
import CodePen from './Codepen';
import { Accordion, AccordionContent, AccordionTitle } from './Accordion';
import Img from './Img';

// Utils
import GithubSlugger from 'github-slugger';
import js from 'refractor/lang/javascript';
import ts from 'refractor/lang/typescript';
import css from 'refractor/lang/css';
import scss from 'refractor/lang/scss';
import go from 'refractor/lang/go';
import bash from 'refractor/lang/bash';
import jsx from 'refractor/lang/jsx';
import tsx from 'refractor/lang/tsx';
import template from 'refractor/lang/js-templates';

// Language
registerLanguage(js);
registerLanguage(ts);
registerLanguage(css);
registerLanguage(scss);
registerLanguage(go);
registerLanguage(bash);
registerLanguage(jsx);
registerLanguage(tsx);
registerLanguage(template);

const slugger = new GithubSlugger();

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
          <RiExternalLinkLine className="mb-1 mr-1 inline-block" />
          {children}
        </a>
      );
    },
    highlight: (props: any) => <mark>{props.children}</mark>,
  },
  types: {
    image: ({ value }: { value: any }) => {
      return <Img image={value} />;
    },

    // {value}: {value: {code: any}}
    CodeField: (source: any) => {
      const language = source.value.language || 'javascript';
      const title = source.value.filename;

      return (
        <>
          {title ? (
            <>
              <span className="not-prose block rounded-t-md border-b-2 bg-[#2E3440] py-1 pl-3 text-xs text-white">
                {title}
              </span>
              <Refractor
                className="!rounded-t-none"
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

export type CustomPortableTextHeadingType =
  | string[]
  | {
      props: {
        text: string;
        markType: string;
        markKey: string;
      };
    }[];

const myPortableTextComponents = {
  block: {
    h2: ({ children }: { children: CustomPortableTextHeadingType }) => {
      if (children.length > 0 && children[0]) {
        let text = '';
        if (typeof children[0] === 'string') {
          text = children[0];
        } else if (typeof children[0] === 'object' && children[0].props.text) {
          text = children[0].props.text;
        }

        if (text) {
          const cleanText = text.replace(/\s+/g, '');
          const id = slugger.slug(cleanText);
          return (
            <h2 id={id} className="border-b border-slate-300 pb-2">
              {text}
            </h2>
          );
        }
      }
    },
    h3: ({ children }: { children: CustomPortableTextHeadingType }) => {
      if (children.length > 0 && children[0]) {
        let text = '';
        if (typeof children[0] === 'string') {
          text = children[0];
        } else if (typeof children[0] === 'object' && children[0].props.text) {
          text = children[0].props.text;
        }

        if (text) {
          const cleanText = text.replace(/\s+/g, '');
          const id = slugger.slug(cleanText);
          return <h3 id={id}>{text}</h3>;
        }
      }
    },
    h4: ({ children }: { children: CustomPortableTextHeadingType }) => {
      if (children.length > 0 && children[0]) {
        let text = '';
        if (typeof children[0] === 'string') {
          text = children[0];
        } else if (typeof children[0] === 'object' && children[0].props.text) {
          text = children[0].props.text;
        }

        if (text) {
          return <h4>{text}</h4>;
        }
      }
    },
    blockquote: ({ children }: { children: string[] }) => {
      return (
        <blockquote className="not-prose my-2 border-l-4 border-gray-400 bg-slate-100 px-3 py-1">
          {children}
        </blockquote>
      );
    },
    normal: ({ children }: { children: string[] }) => {
      return <p>{children}</p>;
    },
  },
  list: {
    bullet: ({ children }: { children: string[] }) => {
      return <ul>{children}</ul>;
    },
    number: ({ children }: { children: string[] }) => {
      return <ol>{children}</ol>;
    },
  },
  types: {
    image: ({ value }: { value: any }) => {
      return <Img image={value} />;
    },
    Video: ({ value }: { value: any }) => {
      return (
        <video
          preload="metadata"
          controls
          muted
          className="mb-[1rem] aspect-video w-full bg-neutral-900"
        >
          <source src={value.videoUrl} type="video/mp4" />
        </video>
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
              <span className="block rounded-t bg-slate-600 px-4 py-1.5 font-mono text-sm text-gray-50">
                {title}
              </span>
              <Refractor
                className="!mt-0 !rounded-tl-none !rounded-tr-none"
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
      const bodyLength = (source.value.text && toPlainText(source.value.text).length) || 0;

      const duration = bodyLength > 500 ? 1.2 : 0.6;

      return isExpanded ? (
        <Accordion
          className="rounded border border-gray-200 bg-gray-100 px-4 shadow"
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
        <div className="rounded border border-gray-200 bg-gray-100 px-4 shadow">
          <p className="font-semibold">{source.value.title}</p>
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
        <div>
          <CodePen url={url} themeId={themeId} />
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ value, children }: { value: any; children: any }) => {
      const { slug = {} } = value;
      const href = `/post/${slug.current}`;

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
          <RiExternalLinkLine className="mb-1 mr-1 inline-block" />
          {children}
        </a>
      );
    },
  },
};

const CustomPortableText = (props: any) => {
  slugger.reset();
  return (
    // @ts-ignore
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
};

export default CustomPortableText;
