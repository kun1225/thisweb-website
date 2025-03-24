import { Fragment } from 'react';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { cn } from '@/src/shared/lib/utils';

function CustomLink({ href, className, children, ...props }: React.ComponentPropsWithoutRef<'a'>) {
  if (!href) return;

  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  const customClassName =
    'inline-block relative z-10 border-b-none text-blue-1 duration-200 hover:text-white after:absolute after:inset-x-[-4px] after:inset-y-0 after:bg-blue-1 after:duration-200 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 after:-z-10';

  const keyProp = props.key;
  const propsWithoutKey = { ...props };
  delete propsWithoutKey.key;

  return (
    <Fragment key={keyProp || null}>
      {isInternalLink ? (
        <Link className={`${cn(customClassName, className)}`} href={href} {...propsWithoutKey}>
          {children}
        </Link>
      ) : null}
      {isAnchorLink ? (
        <a className={`text-blue-1 ${className}`} href={href} {...propsWithoutKey}>
          {children}
        </a>
      ) : null}
      {!isInternalLink && !isAnchorLink && (
        <a
          className={`${cn(customClassName, className)} inline-flex items-baseline gap-[1px]`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          {...propsWithoutKey}
        >
          {typeof children === 'string' && <AiOutlineLink />}
          {children}
        </a>
      )}
    </Fragment>
  );
}

export default CustomLink;
