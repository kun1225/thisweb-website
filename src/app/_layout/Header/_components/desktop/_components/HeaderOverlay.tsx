import { cn } from '@/src/libs/utils';

export default function HeaderOverlay({
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
        'g-header__overlay',
        currentIndex !== -1 ? 'pointer-events-auto' : 'pointer-events-none'
      )}
      onClick={closeMegaMenu}
    />
  );
}
