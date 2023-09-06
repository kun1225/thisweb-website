import Link from 'next/link';

import { AiOutlineLink } from 'react-icons/ai'

type Props = React.ComponentPropsWithoutRef<'a'>

const CustomLink = ({ href, children, ...rest }: Props) => {

  if (!href) return;

  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  const className = 'text-secondary relative hover:text-white duration-200 after:absolute after:inset-x-[-6px] after:inset-y-[-1px] after:duration-200 after:origin-bottom after:bg-secondary after:scale-y-0 hover:after:scale-y-100 after:-z-10'

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
          <a target="_blank" rel="noopener noreferrer" href={href} className={className} {...rest} >
            {typeof children === 'string' && (
              <AiOutlineLink className="mr-1 inline-block h-4 w-4" />
            )}
            {children}
          </a>
        )
      }
    </>

  )
};

export default CustomLink;