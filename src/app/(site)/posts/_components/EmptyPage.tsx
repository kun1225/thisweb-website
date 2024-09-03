'use client';
import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from "react-icons/io";
function EmptyPage() {
  const router = useRouter();

  return (
    <div className="min-h-[50vh] ">
      <p className="my-8">喔！這裡沒有文章呢！</p>
      <button className="flex gap-2 items-center text-sm transition hover:text-primary" onClick={() => router.back()}>
        <IoIosArrowRoundBack/>
        <p>回上一頁</p>
      </button>
    </div>
  );
}

export default EmptyPage;
