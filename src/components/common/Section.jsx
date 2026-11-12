import { cn } from '../../utils/cn';

/**
 * Homepage section shell. Holds the site's one vertical spacing scale
 * (80 / 96 / 128px at phone / tablet / desktop) and the page-width container,
 * so every section lines up. `bordered` draws the hairline divider above it.
 */
export default function Section({ id, bordered = true, className, children }) {
  return (
    <section id={id} className={cn('py-20 sm:py-24 lg:py-32', bordered && 'border-t border-line', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Space below a section heading, matching the section spacing scale. */
export const HEADING_GAP = 'mb-10 sm:mb-14 lg:mb-20';
