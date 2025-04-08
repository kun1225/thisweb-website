import { PostHogProvider } from './PosthogProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <PostHogProvider>{children}</PostHogProvider>;
}
