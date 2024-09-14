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
        'fixed top-[var(--s-header)] left-0 w-[100%] h-[calc(100vh_-_var(--s-header))] bg-[rgba(0,0,0,0.5)] z-10',
        currentIndex !== -1 ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      onClick={closeMegaMenu}
    />
  );
}
