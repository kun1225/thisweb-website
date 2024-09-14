import Link from 'next/link';
import { navContent } from './header/navContent';

function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between gap-8 mt-32 p-16 bg-primary text-white text-xs transition duration-[0.6s]"
      id="g-footer"
    >
      <div>
        <h4 className="text-secondary text-sm">頁面導覽</h4>
        <ul className="mt-2 flex flex-col gap-2">
          {navContent.map(({ title, url }) => (
            <Link href={url} key={title}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-secondary text-sm">聯絡資訊</h4>
        <ul className="mt-2 flex flex-col gap-2">
          <li>Email: thisweb.tech@gmail.com</li>
          <li>Instagram: this.web</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
