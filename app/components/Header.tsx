import Link from "next/link"

export const navContent = [
  {
    title: '主頁',
    url: '/'
  },
  {
    title: '文章',
    url: '/articles'
  },
]

const Header = () => {

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm shadow-gray-200 sticky top-0 backdrop-blur-md z-50 bg-[#ffffff85]">
      <Link href="/"><h1 className="font-tw-code">ThisWeb.</h1></Link>
      <nav>
        <ul className="text-xs flex gap-4">
          {navContent.map(({ title, url }) => (
            <Link href={url} key={title} className="text-gray-500 hover:text-secondary duration-200">
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header