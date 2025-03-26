import { Refractor, registerLanguage } from 'react-refractor';
import bash from 'refractor/bash';
import css from 'refractor/css';
import go from 'refractor/go';
import js from 'refractor/javascript';
import template from 'refractor/js-templates';
import jsx from 'refractor/jsx';
import scss from 'refractor/scss';
import tsx from 'refractor/tsx';
import ts from 'refractor/typescript';

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

export function CodeField(source: any) {
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
}
