import { useEffect, useState } from 'react';

/** True while the page is scrolled further than `threshold` pixels. */
export function useScrollThreshold(threshold) {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const update = () => setIsPast(window.scrollY > threshold);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return isPast;
}
