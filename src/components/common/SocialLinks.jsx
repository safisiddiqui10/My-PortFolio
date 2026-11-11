import { socialLinks } from '../../data/socialLinks';
import { cn } from '../../utils/cn';
import { SpriteIcon } from './IconSprite';

const VARIANTS = {
  hero: {
    link: 'w-11 h-11 inline-flex items-center justify-center rounded-[10px] border border-line transition-colors',
    text: 'text-ink',
    icon: 'w-5 h-5',
  },
  footer: {
    link: 'w-11 h-11 inline-flex items-center justify-center rounded-lg border border-line transition-colors',
    text: 'text-ink-2',
    icon: 'w-4 h-4',
  },
};

/** Row of square social icon buttons, used in the hero and the footer. */
export default function SocialLinks({ variant = 'hero', className, style }) {
  const styles = VARIANTS[variant];

  return (
    <div className={className} style={style}>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
          aria-label={link.label}
          className={cn(styles.link, link.tinted !== false && styles.text, link.hover)}
        >
          {link.image ? (
            <img src={link.image} alt="" className={styles.icon} />
          ) : (
            <SpriteIcon id={link.icon} className={styles.icon} />
          )}
        </a>
      ))}
    </div>
  );
}
