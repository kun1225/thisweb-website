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
        'g-header__close-overlay',
        currentIndex !== -1 ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      onClick={closeMegaMenu}
    />
  );
}
