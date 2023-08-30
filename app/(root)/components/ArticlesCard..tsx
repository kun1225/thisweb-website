import Link from 'next/link'

const ArticlesCard = ({
  title,
  desc,
  url
}: {
  title: string
  desc: string
  url: string
}) => {

  const truncateDesc = desc.split('').slice(0, 50).join('');

  return (
    <Link href={url} className="flex-1 p-8 shadow-sm shadow-gray-500 rounded-md duration-200 hover:shadow-gray-800">
        <h3 className='mb-2'>{title}</h3>
        <p className="text-sm">{truncateDesc}...</p>
    </Link>
  )
}

export default ArticlesCard;    