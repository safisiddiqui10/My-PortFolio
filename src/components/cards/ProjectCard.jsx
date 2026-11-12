import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import TextLink from '../common/TextLink';

/** Colors per project accent (full class strings so Tailwind can find them). */
const ACCENTS = {
  pink: { cover: 'bg-pink/20', icon: 'text-tpink', tag: 'bg-pink/30' },
  ultra: { cover: 'bg-ultra/15', icon: 'text-ultrat', tag: 'bg-ultra/20' },
  mint: { cover: 'bg-mint/25', icon: 'text-tmint', tag: 'bg-mint/40' },
};

/**
 * Project card: colored icon cover, then title, description, highlights, tech tags and links.
 * - Default: vertical card, for grids (homepage).
 * - `wide`: one project per row from tablet up, cover on the left and details on the right (/projects).
 *   Stacks like the default card on phones.
 * `maxHighlights` limits the points shown (homepage: 3); leave it out to show every point and the overview.
 */
export default function ProjectCard({ project, maxHighlights, wide = false, titleAs: Title = 'h3' }) {
  const { title, description, tags, accent, icon: Icon = FolderGit2, highlights = [], overview, liveUrl, repoUrl } = project;
  const colors = ACCENTS[accent] ?? ACCENTS.ultra;
  const isFull = maxHighlights === undefined;
  const shownHighlights = isFull ? highlights : highlights.slice(0, maxHighlights);
  const hasLinks = Boolean(liveUrl || repoUrl);

  return (
    <article
      className={cn(
        'flex flex-col h-full bg-surface border border-line rounded-2xl overflow-hidden hover:border-ink/40 transition-colors',
        wide && 'md:flex-row',
      )}
    >
      <div
        className={cn(
          'h-36 sm:h-40 flex items-center justify-center border-b border-line shrink-0',
          wide && 'md:h-auto md:w-56 lg:w-72 md:border-b-0 md:border-r',
          colors.cover,
        )}
      >
        <Icon className={cn('w-14 h-14', wide && 'lg:w-16 lg:h-16', colors.icon)} aria-hidden="true" />
      </div>

      <div className={cn('flex flex-col flex-1 p-5 sm:p-6', wide && 'md:p-8 min-w-0')}>
        <Title
          className={cn(
            'text-xl sm:text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink',
            wide && 'lg:text-3xl',
          )}
        >
          {title}
        </Title>
        <p className="text-base leading-6 text-ink-2 mt-3">{description}</p>
        {isFull && overview && <p className="text-base leading-6 text-ink-2 mt-3">{overview}</p>}

        {shownHighlights.length > 0 && (
          <ul
            className={cn(
              'space-y-2 text-[15px] leading-6 text-ink-2 list-disc pl-5 marker:text-ink-3 mt-4',
              wide && 'max-w-3xl',
            )}
          >
            {shownHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        {/* Tech tags and links stay together at the bottom-left, aligned across cards in a row */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className={cn('text-[13px] px-2.5 py-1 rounded-lg text-ink', colors.tag)}>
                {tag}
              </span>
            ))}
          </div>
          {hasLinks ? (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {liveUrl && (
                <TextLink href={liveUrl} target="_blank" rel="noopener">
                  Live demo
                  <ArrowUpRight className="w-4 h-4" />
                </TextLink>
              )}
              {repoUrl && (
                <TextLink href={repoUrl} target="_blank" rel="noopener">
                  Source code
                  <ArrowUpRight className="w-4 h-4" />
                </TextLink>
              )}
            </div>
          ) : (
            <p className="text-sm text-ink-3">Links coming soon</p>
          )}
        </div>
      </div>
    </article>
  );
}
