import { cn } from '../../utils/cn';

/**
 * Section heading. An h2 on the homepage; inner pages use it as their h1 (`as="h1"`).
 * Color, width and spacing vary per use and come in via `className`.
 */
export default function SectionTitle({ as: Heading = 'h2', className, children }) {
  return (
    <Heading className={cn('text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.035em]', className)}>
      {children}
    </Heading>
  );
}
