import { cn } from '@/src/shared/lib/utils';

export function HeaderOverlay({
  currentIndex,
  closeMegaMenu,
}: {
  currentIndex: number;
  closeMegaMenu: () => void;
}) {
  return (
    <button
      tabIndex={-1}
      type="button"
      aria-label="Close the mega menu"
      className={cn(
        'fixed top-0 left-0 z-10 h-screen w-full',
        currentIndex !== -1 ? 'pointer-events-auto' : 'pointer-events-none'
      )}
      onClick={closeMegaMenu}
    />
  );
}
