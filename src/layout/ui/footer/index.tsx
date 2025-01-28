import Link from 'next/link';

const footerNav = [
  { title: '首頁', url: '/' },
  { title: '文章列表', url: '/posts/page/0' },
  { title: '前端自學大補帖', url: '/product/frontend-guide' },
];

export function Footer() {
  return (
    <footer
      className="flex flex-col justify-between gap-8 bg-blue p-16 text-white md:flex-row"
      id="g-footer"
    >
      <div>
        <p className="text-base">頁面導覽</p>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          {footerNav.map(({ title, url }) => (
            <li key={title}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-base">聯絡資訊</p>
        <ul className="mt-4 flex flex-col gap-2 text-sm">
          <li>
            <Link href="mailto:thisweb.tech@gmail.com">Email: thisweb.tech@gmail.com</Link>
          </li>
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
