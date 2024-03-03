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
      className="flex-1 p-8 shadow-sm shadow-gray-500 rounded-md duration-200 hover:shadow-gray-800"
      href={`posts/${url}`}
    >
      <h3 className="mb-2">{title}</h3>
      <p className="text-xs">{truncateDesc}...</p>
    </Link>
  );
}

export default PostCard;
