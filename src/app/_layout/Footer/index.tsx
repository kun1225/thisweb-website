import Link from 'next/link';
import { navContent } from '../Header/navContent';

function Footer() {
  return (
    <footer className="g-footer" id="g-footer">
      <div className="g-footer__nav">
        <p className="g-footer__nav__title">頁面導覽</p>
        <ul className="g-footer__nav__list">
          {navContent.map(({ title, url }) => (
            <li key={title}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="g-footer__nav">
        <p className="g-footer__nav__title">聯絡資訊</p>
        <ul className="g-footer__nav__list">
          <li>Email: thisweb.tech@gmail.com</li>
          <li>
            <Link href="https://www.instagram.com/this.web" target="_blank">
              Instagram: this.web
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
