import Link from 'next/link';

const footerNav = [
  { title: '首頁', url: '/' },
  { title: '文章列表', url: '/posts/page/0' },
  { title: '前端自學大補帖', url: '/product/frontend-guide' },
];

export function Footer() {
  return (
    <footer className="g-footer" id="g-footer">
      <div className="g-footer__nav">
        <p className="g-footer__nav__title">頁面導覽</p>
        <ul className="g-footer__nav__list">
          {footerNav.map(({ title, url }) => (
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
