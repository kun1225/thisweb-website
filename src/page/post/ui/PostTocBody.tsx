// Utils
import { cn } from '@/src/shared/lib/utils';
// Components
import { Accordion, AccordionContent, AccordionTitle } from '@/src/shared/ui/Accordion';
// Types
import { TypePostTocHeading } from '@/src/types/typePosts';

export function PostTocBody({
  structuredHeadings,
  activeId,
}: {
  structuredHeadings: TypePostTocHeading[];
  activeId: string | undefined;
}) {
  return (
    <div className="p-post__toc__body">
      {structuredHeadings.map((heading: TypePostTocHeading) => {
        return heading.children.length === 0 ? (
          <HeadingButton
            heading={heading}
            activeId={activeId}
            className={cn(
              heading.id === activeId ? 'hover:text-blue' : 'text-gray-500 hover:text-neutral-900',
              heading.level === 3 && 'pl-3',
              'select-none text-left transition'
            )}
            key={heading.text}
          >
            {heading.text}
          </HeadingButton>
        ) : (
          <Accordion iconPosition="right" key={heading.id} className="">
            <AccordionTitle
              className={cn(
                heading.id === activeId ? 'hover:text-blue' : 'text-gray-500 hover:text-neutral-900'
              )}
            >
              <HeadingButton heading={heading} activeId={activeId}>
                {heading.text}
              </HeadingButton>
            </AccordionTitle>
            <AccordionContent className="flex flex-col">
              {heading.children.map((h3: TypePostTocHeading) => (
                <HeadingButton heading={h3} activeId={activeId} key={h3.text} className="mt-3">
                  {h3.text}
                </HeadingButton>
              ))}
            </AccordionContent>
          </Accordion>
        );
      })}
    </div>
  );
}

function HeadingButton({
  heading,
  activeId,
  className,
  children,
}: {
  heading: TypePostTocHeading;
  activeId: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={cn(
        'select-none text-left transition',
        heading.id === activeId ? 'hover:text-blue' : 'text-gray-500 hover:text-neutral-900',
        heading.level === 3 && 'pl-4',
        className
      )}
      key={heading.id}
      href={`#${heading.id}`}
      aria-label={`跳轉至${heading.text}`}
      title={`跳轉至${heading.text}`}
      data-testid="headingButton"
    >
      {children}
    </a>
  );
}
