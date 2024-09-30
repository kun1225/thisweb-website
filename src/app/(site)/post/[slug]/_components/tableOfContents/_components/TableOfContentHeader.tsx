import { cn } from '@/src/libs/utils';
import { FaCaretRight } from 'react-icons/fa';

const TableOfContentHeader: React.FC<{
  toggleToc: () => void;
  setIsTocOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isTocCollapsed: boolean;
}> = ({ toggleToc, setIsTocOpen, isTocCollapsed }) => {
  return (
    <div className="flex justify-between items-center gap-2 mb-2">
      <p className="text-primary" data-testid="toc-header-title">
        目錄
      </p>
    </div>
  );
};

export default TableOfContentHeader;
