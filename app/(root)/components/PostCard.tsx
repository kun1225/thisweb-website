import Link from 'next/link';

function PostCard({
  title,
  desc,
  url,
}: {
  title: string;
  desc: string;
  url: string;
}) {
  const truncateDesc = desc.split('').slice(0, 50).join('');

  return (
    <Link
      className="flex-1 p-8 shadow-md shadow-gray-400 rounded-md duration-200  hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-600"
      href={`post/${url}`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{truncateDesc}...</p>
    </Link>
  );
}

export default PostCard;
