// Components
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { RiExternalLinkLine } from "react-icons/ri";

// Code Field
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import css from 'refractor/lang/css';
import go from 'refractor/lang/go';
import bash from 'refractor/lang/bash';

// Utils
import GithubSlugger from 'github-slugger';

// Language
Refractor.registerLanguage(js);
Refractor.registerLanguage(css);
Refractor.registerLanguage(go);
Refractor.registerLanguage(bash);

// Utils
import { urlFor } from '@/lib/sanity/client';

const slugger = new GithubSlugger();

const linkClassName =
'inline-block relative z-10 text-secondary duration-200 hover:text-white after:absolute after:inset-x-[-4px] after:inset-y-0 after:bg-secondary after:duration-200 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 after:-z-10';

const myPortableTextComponents = {
  block: {
    h2: ({ children }: { children: string[] }) => {
      const text = children[0]!.replace(/\s+/g, '');
      const id = slugger.slug(text);
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }: { children: string[] }) => {
      const text = children[0]!.replace(/\s+/g, '');
      const id = slugger.slug(text);
      return <h3 id={id}>{children}</h3>;
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

      return (
        <Refractor
          language={language}
          value={source.value.code}
          // markers={source.highlightedLines}
        />
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
    link: ({value, children}: { value: any; children: any }) => {
      const { blank, href } = value
      return blank ?
        <a href={href} target="_blank" rel="noopener" className={linkClassName}><RiExternalLinkLine />{children}</a>
        : <a href={href} className={linkClassName}><RiExternalLinkLine />{children}</a>
    }
  },
};

const CustomPortableText = (props: any) => {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
};

export default CustomPortableText;
