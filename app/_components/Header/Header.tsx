import Link from 'next/link';
import Magnetic from '../effect/Magnetic';
import Stack from '../Stack';

export const navContent = [
  {
    title: '主頁',
    url: '/',
  },
  {
    title: '文章',
    url: '/posts/page/0',
  },
];

function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-2 shadow-sm shadow-gray-200 sticky top-0 backdrop-blur-md z-header">
      <Link href="/">
        <Magnetic className="p-2">
          <h1 className="font-[FiraCode]">ThisWeb.</h1>
        </Magnetic>
      </Link>
      <nav>
        <Stack as="ul" className="text-xs">
          {navContent.map(({ title, url }) => (
            <li key={title}>
              <Link href={url}>
                <Magnetic className="text-gray-500 hover:text-secondary duration-200 p-1 xs:p-4 whitespace-nowrap">
                  {title}
                </Magnetic>
              </Link>
            </li>
          ))}
        </Stack>
      </nav>
    </header>
  );
}

export default Header;
