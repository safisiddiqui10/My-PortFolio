import { cn } from '../../utils/cn';

/**
 * Vertical timeline used by Education and Experience.
 * The first item is highlighted as the current one.
 * `headingAs` sets the heading level for item titles to fit the surrounding outline.
 */
export default function Timeline({ items, headingAs: Heading = 'h4', className }) {
  return (
    <ol className={cn('relative border-l-2 border-ink ml-1.5 space-y-12', className)}>
      {items.map((item, index) => {
        const isCurrent = index === 0;
        return (
          <li key={`${item.period}-${item.title}`} className="relative pl-8">
            <span
              className={cn(
                'absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-[3px] border-paper',
                isCurrent ? 'bg-ultra' : 'bg-ink',
              )}
            ></span>
            <p className={cn('text-sm font-semibold mb-1', isCurrent ? 'text-ultrat' : 'text-ink-3')}>{item.period}</p>
            <Heading className="text-xl font-semibold leading-snug mb-1">{item.title}</Heading>
            <p className="text-[15px] text-ink-3 mb-3">{item.organization}</p>
            <p className="text-[15px] leading-6 text-ink-2">{item.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
