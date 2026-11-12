import { useEffect, useState } from 'react';

/**
 * Returns the id of the `section[id]` currently under the top of the viewport
 * (scroll position + `offset`), or '' when none matches or tracking is disabled.
 */
export function useActiveSection({ enabled = true, offset = 120 } = {}) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!enabled) {
      setActiveId('');
      return undefined;
    }

    function update() {
      const scrollY = window.scrollY + offset;
      let current = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        const top = section.offsetTop;
        if (scrollY >= top && scrollY < top + section.offsetHeight) {
          current = section.getAttribute('id');
        }
      });
      setActiveId(current);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [enabled, offset]);

  return activeId;
}
