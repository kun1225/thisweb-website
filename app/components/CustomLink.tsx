import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

type Props = React.ComponentPropsWithoutRef<'a'>;

function CustomLink({ href, children, ...rest }: Props) {
  if (!href) return;

  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  const className =
    'text-secondary relative hover:text-white duration-200 after:absolute after:inset-x-[-4px] after:inset-y-0 after:duration-200 after:origin-bottom after:bg-secondary after:scale-y-0 hover:after:scale-y-100 after:-z-10';

  return (
    <>
      {isInternalLink ? <Link className={className} href={href} target="_blank" {...rest}>
          {children}
        </Link> : null}
      {isAnchorLink ? <a className="text-secondary" href={href} {...rest}>
          {children}
        </a> : null}
      {!isInternalLink && !isAnchorLink && (
        <a
          className={`${className} inline-flex items-baseline gap-[1px]`}
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
