import Link from "next/link"
import Magnetic from "./effect/Magnetic"

export const navContent = [
  {
    title: '主頁',
    url: '/'
  },
  {
    title: '文章',
    url: '/articles/page/1'
  },
]

const Header = () => {

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-2 shadow-sm shadow-gray-200 sticky top-0 backdrop-blur-md z-50 bg-[#ffffff85]">
      <Link href="/">
        <Magnetic className="p-2">
          <h1 className="font-tw-code">ThisWeb.</h1>
        </Magnetic>
      </Link>
      <nav>
        <ul className="text-xs flex gap-4">
          {navContent.map(({ title, url }) => (
            <li key={title} >
              <Link href={url}>
                <Magnetic className="text-gray-500 hover:text-secondary duration-200 p-2">
                  {title}
                </Magnetic>
              </Link>
            </li>

          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header