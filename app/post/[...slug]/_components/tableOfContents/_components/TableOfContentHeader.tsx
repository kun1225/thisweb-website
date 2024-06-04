import { cn } from '@/lib/utils';
import { FaCaretRight } from 'react-icons/fa';

const TableOfContentHeader: React.FC<{
  toggleToc: () => void;
  setIsTocOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isTocCollapsed: boolean;
}> = ({ toggleToc, setIsTocOpen, isTocCollapsed }) => {
  return (
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-primary">目錄</p>
      <button
        className="hidden xl:block text-neutral-500 hover:text-neutral-950 transition"
        type="button"
        aria-label="顯示文章目錄"
        title="顯示文章目錄"
        onClick={() => {
          toggleToc();
          setIsTocOpen(false);
        }}
      >
        <FaCaretRight
          className={cn('transition', isTocCollapsed && 'opacity-0')}
        />
      </button>
    </div>
  );
};

export default TableOfContentHeader;
