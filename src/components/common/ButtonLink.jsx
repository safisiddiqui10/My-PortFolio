import { cn } from '../../utils/cn';

const BASE =
  'inline-flex items-center h-12 px-6 rounded-[10px] text-[15px] font-semibold active:scale-[0.98] transition-[color,background-color,transform]';

const VARIANTS = {
  primary: 'bg-ink text-paper hover:bg-ultra hover:text-white',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
};

/**
 * Link styled as a button. Renders an <a> by default; pass `as={Link}` for a route
 * or `as={SectionLink}` for a homepage section. Layout classes come in via `className`.
 */
export default function ButtonLink({ as: Component = 'a', variant = 'primary', className, children, ...props }) {
  return (
    <Component className={cn(BASE, VARIANTS[variant], className)} {...props}>
      {children}
    </Component>
  );
}
