'use client';

import React, {
  useState,
  createContext,
  useContext,
  HtmlHTMLAttributes,
} from 'react';
import { cn } from '@/lib/utils';
import { FaCaretDown } from 'react-icons/fa6';

// Context to share the Accordion state and functionality across the compound components
interface AccordionContextType {
  isExpanded: boolean;
  toggle: () => void;
  stretch: boolean;
  iconPosition?: 'left' | 'right';
  duration: number;
}
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);
/**
 * * Main AccordionList component
 */
interface AccordionProps {
  stretch?: boolean;
  initExpanded?: boolean;
  iconPosition?: 'left' | 'right';
  duration?: number;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
  children: React.ReactNode;
}
const Accordion: React.FC<AccordionProps> = ({
  stretch = false,
  initExpanded = true,
  iconPosition = 'left',
  duration = 0.6,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(initExpanded);
  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <AccordionContext.Provider
      value={{ isExpanded, toggle, stretch, iconPosition, duration }}
    >
      <div className={`${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

/**
 * * Title component
 */
interface TitlePropsType extends HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
}
const AccordionTitle: React.FC<TitlePropsType> = ({
  children,
  className = '',
  as: Tag = 'p',
}) => {
  const accordionContext = useContext(AccordionContext);
  if (!accordionContext)
    throw new Error('AccordionListTitle must be used within a AccordionList');

  const { isExpanded, toggle, iconPosition, stretch } = accordionContext;

  return (
    <Tag
      className={`flex gap-2 select-none ${cn(stretch && 'cursor-pointer')} ${className}`}
      onClick={stretch ? toggle : undefined}
    >
      {iconPosition === 'left' && (
        <FaCaretDown
          className={`transition text-inherit cursor-pointer translate-y-[8px] ${cn(
            isExpanded && 'rotate-180 -translate-y-[0px]',
          )}`}
          onClick={toggle}
        />
      )}
      {children}
      {iconPosition === 'right' && (
        <FaCaretDown
          className={`transition text-inherit cursor-pointer translate-y-[2.5px] ${cn(
            isExpanded && 'rotate-180 -translate-y-[0px]',
          )}`}
          onClick={toggle}
        />
      )}
    </Tag>
  );
};

/**
 * * Content component
 */
interface ContentPropsType extends HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
}
const AccordionContent: React.FC<ContentPropsType> = ({
  children,
  className = '',
  ...props
}) => {
  const accordionContext = useContext(AccordionContext);
  if (!accordionContext)
    throw new Error(
      'AccordionList.Content must be used within a AccordionList',
    );

  const { isExpanded, duration } = accordionContext;

  return (
    <div
      className={`grid transition-all grid-rows-[0fr] duration-[${duration}s] ${cn(
        isExpanded && 'grid-rows-[1fr]',
      )}`}
      style={{
        transitionDuration: `${duration}s`,
      }}
    >
      <div className={`overflow-hidden ${className}`} {...props}>{children}</div>
    </div>
  );
};

export { Accordion, AccordionTitle, AccordionContent };
