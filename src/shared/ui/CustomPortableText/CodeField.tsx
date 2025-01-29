import { Refractor, registerLanguage } from 'react-refractor';

import bash from 'refractor/lang/bash';
import css from 'refractor/lang/css';
import go from 'refractor/lang/go';
import js from 'refractor/lang/javascript';
import template from 'refractor/lang/js-templates';
import jsx from 'refractor/lang/jsx';
import scss from 'refractor/lang/scss';
import tsx from 'refractor/lang/tsx';
import ts from 'refractor/lang/typescript';

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
