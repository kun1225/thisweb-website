'use client';
// Hooks
import { useParams } from 'next/navigation';

const PostsHeader: React.FC = () => {
  const params = useParams();
  const categoryUrl = params?.category || '';
  const postListTitle = (() => {
    switch (categoryUrl) {
      case 'frontend-basic':
        return '前端基礎';
      case 'html':
        return '前端基礎 - HTML';
      case 'css':
        return '前端基礎 - CSS';
      case 'js':
        return '前端基礎 - JavaScript';
      case 'web-animation':
        return '前端動畫特效';
      case 'frontend-framework':
        return '前端框架';
      case 'react':
        return '前端框架 - React';
      case 'frontend-advance':
        return '前端進階教學';
      case 'optimize':
        return '前端進階教學 - 網頁優化';
      case 'js-advance':
        return '前端進階教學 - JavaScript';
      case 'interview':
        return '前端面試常見問題';
      case 'self-growth':
        return '前端職涯相關';
      case 'others':
        return '其它內容';
      case 'software-news':
        return '軟體最新資訊';
      default:
        return '全部文章';
    }
  })();

  return (
    <div className="p-posts__header">
      <h2 className="text-3xl font-bold">
        <span>✏️</span>
        <span className="ml-4">{postListTitle}</span>
      </h2>
    </div>
  );
};

export default PostsHeader;
