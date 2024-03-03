// Components
import { PortableText } from '@portabletext/react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import css from 'refractor/lang/css';
import go from 'refractor/lang/go';

// Utils
import GithubSlugger from 'github-slugger';

// Language
Refractor.registerLanguage(js);
Refractor.registerLanguage(css);
Refractor.registerLanguage(go);

// Utils
import { urlFor } from '@/lib/sanity/client';

const slugger = new GithubSlugger();

const myPortableTextComponents = {
  block: {
    h2: ({children}: {children: string[]}) => {
      const text = children[0]!.replace(/\s+/g, '');
      const id = slugger.slug(text);
      return <h2 id={id}>{children}</h2>
    },
    h3: ({children}: {children: string[]}) => {
      const text = children[0]!.replace(/\s+/g, '');
      const id = slugger.slug(text);
      return <h3 id={id}>{children}</h3>
    },
  },

  types: {
    image: ({ value }: { value: any }) => {
      const imageSrc = urlFor(value).width(1080).url();

      return <img src={imageSrc} />;
    },
    // {value}: {value: {code: any}}
    CodeField: (source: any) => {

      return <div></div>;
    },
  },
};

const CustomPortableText = (props: any) => {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
};

export default CustomPortableText;
