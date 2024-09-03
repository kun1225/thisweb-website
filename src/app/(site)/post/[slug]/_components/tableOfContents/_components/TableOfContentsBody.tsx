// Utils
import { cn } from '@/src/libs/utils';

// Components
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from '@/src/app/_components/Accordion';
import HeadingButton from './HeadingButton';

//Types
import { HeadingType } from '../type';
interface TableOfContentsBodyProps {
  structuredHeadings: HeadingType[];
  activeId: string | undefined;
}

const TableOfContentsBody: React.FC<TableOfContentsBodyProps> = ({
  structuredHeadings,
  activeId,
}) => {
  return (
    <div className="toc flex flex-col gap-1 text-sm">
      {structuredHeadings.map((heading: HeadingType) => {
        return heading.children.length === 0 ? (
          <HeadingButton
            heading={heading}
            activeId={activeId}
            className={`mb-2 ${cn(
              heading.id === activeId
                ? 'hover:text-primary'
                : 'text-gray-500 hover:text-neutral-900',
              heading.level === 3 && 'pl-4',
              'text-left transition select-none',
            )}`}
            key={heading.text}
          >
            {heading.text}
          </HeadingButton>
        ) : (
          <Accordion iconPosition="right" key={heading.id} className="mb-2">
            <AccordionTitle
              className={`toc__title ${cn(
                heading.id === activeId
                  ? 'hover:text-primary'
                  : 'text-gray-500 hover:text-neutral-900',
              )}`}
            >
              <HeadingButton heading={heading} activeId={activeId}>
                {heading.text}
              </HeadingButton>
            </AccordionTitle>
            <AccordionContent className="flex flex-col">
              {heading.children.map((h3: HeadingType) => (
                <HeadingButton
                  heading={h3}
                  activeId={activeId}
                  key={h3.text}
                  className="mt-2"
                >
                  {h3.text}
                </HeadingButton>
              ))}
            </AccordionContent>
          </Accordion>
        );
      })}
    </div>
  );
};

export default TableOfContentsBody;
