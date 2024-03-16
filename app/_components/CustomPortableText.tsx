// Components
import { PortableText } from '@portabletext/react';
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

const calloutComponents = {
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
                // markers={source.highlightedLines}
              />
            </>
          ) : (
            <Refractor
              language={language}
              value={source.value.code}
              // markers={source.highlightedLines}
            />
          )}
        </>
      );
    }
  },
}

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
                // markers={source.highlightedLines}
              />
            </>
          ) : (
            <Refractor
              language={language}
              value={source.value.code}
              // markers={source.highlightedLines}
            />
          )}
        </>
      );
    },

    Callout: (source: any) => {
      return <div className="callout bg-gray-100 p-2 border-2 border-gray-300 rounded-md shadow-md">
        <p>{source.value.title}</p>
        <PortableText value={source.value.text} components={calloutComponents}/>
      </div>;
    }
  },
};

const CustomPortableText = (props: any) => {
  return (
    // @ts-ignore
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
};

export default CustomPortableText;
