import Link from 'next/link';

import { AiOutlineLink } from 'react-icons/ai'

type Props = React.ComponentPropsWithoutRef<'a'>

const CustomLink = ({ href, children, ...rest }: Props) => {

  if (!href) return;

  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  const className = 'text-secondary relative hover:text-white duration-200 after:absolute after:inset-x-[-4px] after:inset-y-0 after:duration-200 after:origin-bottom after:bg-secondary after:scale-y-0 hover:after:scale-y-100 after:-z-10'

  return (
    <>
      {
        isInternalLink && (
          <Link href={href} className={className} target='_blank' {...rest} >
            {children}
          </Link>
        )
      }
      {
        isAnchorLink && (
          <a href={href} className="text-secondary" {...rest} >
            {children}
          </a>
        )
      }
      {
        !isInternalLink && !isAnchorLink && (
          <a target="_blank" rel="noopener noreferrer" href={href} className={`${className} inline-flex items-baseline gap-[1px]`} {...rest} >
            {typeof children === 'string' && (
              <AiOutlineLink />
            )}
            {children}
          </a>
        )
      }
    </>

  )
};

export default CustomLink;