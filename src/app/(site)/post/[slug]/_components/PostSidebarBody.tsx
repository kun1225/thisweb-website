// Utils
import { cn } from '@/src/shared/lib/utils';
// Components
import { Accordion, AccordionContent, AccordionTitle } from '@/src/shared/ui/Accordion';
// Types
import { TypePostSidebarHeading } from './type';

export default function PostSidebarBody({
  structuredHeadings,
  activeId,
}: {
  structuredHeadings: TypePostSidebarHeading[];
  activeId: string | undefined;
}) {
  return (
    <div className="p-post__sidebar__body">
      {structuredHeadings.map((heading: TypePostSidebarHeading) => {
        return heading.children.length === 0 ? (
          <HeadingButton
            heading={heading}
            activeId={activeId}
            className={`mb-2 ${cn(
              heading.id === activeId
                ? 'hover:text-primary'
                : 'text-gray-500 hover:text-neutral-900',
              heading.level === 3 && 'pl-4',
              'select-none text-left transition'
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
                  : 'text-gray-500 hover:text-neutral-900'
              )}`}
            >
              <HeadingButton heading={heading} activeId={activeId}>
                {heading.text}
              </HeadingButton>
            </AccordionTitle>
            <AccordionContent className="flex flex-col">
              {heading.children.map((h3: TypePostSidebarHeading) => (
                <HeadingButton heading={h3} activeId={activeId} key={h3.text} className="mt-2">
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
  heading: TypePostSidebarHeading;
  activeId: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={cn(
        'select-none text-left transition',
        heading.id === activeId ? 'hover:text-primary' : 'text-gray-500 hover:text-neutral-900',
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
