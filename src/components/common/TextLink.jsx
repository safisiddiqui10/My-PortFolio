import { cn } from '../../utils/cn';

/**
 * Small bold text link with an icon ("Live demo", "Source code", "Back to home").
 * Renders an <a> by default; pass `as={Link}` or `as={SectionLink}` for in-app navigation.
 */
export default function TextLink({ as: Component = 'a', className, children, ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 hover:text-ink transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
