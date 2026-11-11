import huggingFaceLogo from '../assets/icons/huggingface.svg';
import { site } from './site';

/**
 * Social profiles, in the order shown in the hero and footer.
 * `icon` is a symbol id from components/common/IconSprite.jsx; `image` is used instead when set.
 * `hover` holds the per-network hover colors; `tinted: false` skips the base text color
 * (the Hugging Face logo is an image, so the original markup gave it none).
 */
export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: site.githubUrl,
    icon: 'i-github',
    external: true,
    hover: 'hover:bg-ink hover:text-paper',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/safi-siddiqui-b59aa930a',
    icon: 'i-linkedin',
    external: true,
    hover: 'hover:bg-ultra hover:text-white hover:border-ultra',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${site.email}`,
    icon: 'i-mail',
    external: false,
    hover: 'hover:bg-pink hover:border-pink hover:text-navy',
  },
  {
    id: 'kaggle',
    label: 'Kaggle',
    href: 'https://www.kaggle.com/safisiddiqui10',
    icon: 'i-kaggle',
    external: true,
    hover: 'hover:bg-mint hover:border-mint hover:text-navy',
  },
  {
    id: 'huggingface',
    label: 'Hugging Face',
    href: 'https://huggingface.co/Safii10',
    image: huggingFaceLogo,
    external: true,
    tinted: false,
    hover: 'hover:bg-saffron hover:border-saffron',
  },
];

/** "Find me on" list in the Contact section: its own order and icon colors. */
export const contactProfiles = [
  { id: 'linkedin', iconClass: 'text-tpink' },
  { id: 'github', iconClass: 'text-ink' },
  { id: 'kaggle', iconClass: 'text-tmint' },
  { id: 'huggingface' },
].map((entry) => ({ ...socialLinks.find((link) => link.id === entry.id), ...entry }));
