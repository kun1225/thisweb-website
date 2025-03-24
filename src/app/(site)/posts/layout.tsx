import { LayoutPosts } from '@/src/page/posts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutPosts>{children}</LayoutPosts>;
}
