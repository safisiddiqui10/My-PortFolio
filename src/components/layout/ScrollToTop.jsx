import { ArrowUp } from 'lucide-react';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { cn } from '../../utils/cn';
import { scrollToTop } from '../../utils/scroll';

/** Floating "back to top" button, shown after scrolling 500px. */
export default function ScrollToTop() {
  const isVisible = useScrollThreshold(500);

  return (
    <button
      id="back-to-top"
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-40 w-11 h-11 inline-flex items-center justify-center rounded-[10px] bg-ink text-paper hover:bg-ultra hover:text-white transition-[color,background-color,opacity]',
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
