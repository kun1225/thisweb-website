import { cn } from '@/src/libs/utils';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

type Props = React.ComponentPropsWithoutRef<'a'>;

function CustomLink({ href, className, children, ...rest }: Props) {
  if (!href) return;

  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  const customClassName =
    'inline-block relative z-10 border-b-none text-secondary duration-200 hover:text-white after:absolute after:inset-x-[-4px] after:inset-y-0 after:bg-secondary after:duration-200 after:origin-bottom after:scale-y-0 hover:after:scale-y-100 after:-z-10';

  return (
    <>
      {isInternalLink ? (
        <Link className={`${cn(customClassName, className)}`} href={href} {...rest}>
          {children}
        </Link>
      ) : null}
      {isAnchorLink ? (
        <a className={`text-secondary ${className}`} href={href} {...rest}>
          {children}
        </a>
      ) : null}
      {!isInternalLink && !isAnchorLink && (
        <a
          className={`${cn(customClassName, className)} inline-flex items-baseline gap-[1px]`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          {typeof children === 'string' && <AiOutlineLink />}
          {children}
        </a>
      )}
    </>
  );
}

export default CustomLink;
