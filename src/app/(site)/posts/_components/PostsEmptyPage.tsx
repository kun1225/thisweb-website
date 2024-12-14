'use client';
import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function PostsEmptyPage() {
  const router = useRouter();

  return (
    <div className="min-h-[50vh]">
      <p className="my-8">喔！這裡沒有文章呢！</p>
      <button
        type="button"
        aria-label="回上一頁"
        className="flex items-center gap-2 text-sm transition hover:text-primary"
        onClick={() => router.back()}
      >
        <IoIosArrowRoundBack />
        <p>回上一頁</p>
      </button>
    </div>
  );
}
