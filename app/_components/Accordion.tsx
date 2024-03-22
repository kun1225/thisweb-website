'use client';

import React, {
  useState,
  createContext,
  useContext,
  HtmlHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import { FaCaretUp } from 'react-icons/fa6';

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
  iconPosition?: 'left' | 'right';
  stretch?: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
}
const Accordion: React.FC<AccordionProps> = ({
  children,
  iconPosition = 'left',
  stretch = false,
  duration = 0.6,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
interface TitlePropsType {
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
      className={`flex gap-2 items-center select-none ${clsx(stretch && 'cursor-pointer')} ${className}`}
      onClick={stretch ? toggle : undefined}
    >
      {iconPosition === 'left' && (
        <FaCaretUp
          className={`transition text-inherit cursor-pointer ${clsx(
            isExpanded && 'rotate-180 -translate-y-[0.5px]',
          )}`}
          onClick={toggle}
        />
      )}
      {children}
      {iconPosition === 'right' && (
        <FaCaretUp
          className={`transition text-inherit cursor-pointer ${clsx(
            isExpanded && 'rotate-180 -translate-y-[0.5px]',
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
interface ContentPropsType {
  children: React.ReactNode;
  className?: HtmlHTMLAttributes<HTMLElement>['className'];
}
const AccordionContent: React.FC<ContentPropsType> = ({
  children,
  className = '',
}) => {
  const accordionContext = useContext(AccordionContext);
  if (!accordionContext)
    throw new Error(
      'AccordionList.Content must be used within a AccordionList',
    );

  const { isExpanded, duration } = accordionContext;

  return (
    <div
      className={`grid transition-all grid-rows-[0fr] duration-[${duration}s] ${clsx(
        isExpanded && 'grid-rows-[1fr]',
      )} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
      }}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export { Accordion, AccordionTitle, AccordionContent };
