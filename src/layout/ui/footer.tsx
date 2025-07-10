import Link from 'next/link';

const footerNav = [
  { title: '首頁', url: '/' },
  { title: '文章列表', url: '/posts/page/0' },
  { title: '前端自學大補帖', url: '/product/frontend-guide' },
];

export function Footer() {
  return (
    <footer
      className="bg-blue c pt-16 pb-4 text-white transition-[filter] duration-200 ease-linear"
      id="g-footer"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="text-base">頁面導覽</p>

          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {footerNav.map(({ title, url }) => (
              <li key={title}>
                <Link
                  href={url}
                  className="border-b border-transparent transition-colors hover:border-white"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-base">聯絡資訊</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="mailto:thisweb.tech@gmail.com"
                className="border-b border-transparent transition-colors hover:border-white"
              >
                Email: thisweb.tech@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/this.web"
                target="_blank"
                className="border-b border-transparent transition-colors hover:border-white"
              >
                Instagram: this.web
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="pt-16 text-center text-xs">
        Copyright &copy; {new Date().getFullYear()} ThisWeb. All rights reserved.
      </p>
    </footer>
  );
}
