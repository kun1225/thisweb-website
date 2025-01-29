'use client';

// Components
import { PortableText } from '@portabletext/react';
import { RiExternalLinkLine } from 'react-icons/ri';
import Link from 'next/link';
import { Codepen } from '../Codepen';
import { CodeField } from './CodeField';
import { KitForm } from './KitForm';
import { PortableVideo } from './PortableVideo';
import { PortableImg } from './PortableImg';
import { Callout } from './Callout';
// Utils
import GithubSlugger from 'github-slugger';
// Types

const slugger = new GithubSlugger();

const linkClassName =
  'inline-block relative z-10 text-blue-1 duration-200 hover:text-white after:absolute after:inset-x-[-4px] after:inset-y-0 after:bg-blue-1 after:duration-200 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 after:-z-10';

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
  types: {
    image: PortableImg,
    Video: PortableVideo,
    kitForm: KitForm,
    CodeField,
    Callout,
    Codepen,
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
    highlight: (props: any) => <mark>{props.children}</mark>,
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
