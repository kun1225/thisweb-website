import { cn } from '@/src/libs/utils';

export default function CloseMenuOverlay({
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
        'fixed top-0 left-0 w-[100%] h-screen z-10',
        currentIndex !== -1 ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      onClick={closeMegaMenu}
    />
  );
}
