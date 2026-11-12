import { asset } from '../utils/asset';

/** Badge and label colors per accent (full class strings so Tailwind can find them). */
export const certificateAccents = {
  saffron: { badge: 'bg-saffron ring-saffron/25', icon: 'text-navy', label: 'text-tsaffron' },
  ultra: { badge: 'bg-ultra ring-ultra/25', icon: 'text-white', label: 'text-ultrat' },
  pink: { badge: 'bg-pink ring-pink/25', icon: 'text-navy', label: 'text-tpink' },
  mint: { badge: 'bg-mint ring-mint/25', icon: 'text-navy', label: 'text-tmint' },
};

/**
 * Add the PDF to public/Certificates and an entry here.
 * `issuer` is the organization that issued the certificate, shown on the card as "Issued by …".
 * The homepage shows certificates marked featured; /certifications shows all of them.
 */
export const certifications = [
  {
    title: 'Claude 101',
    category: 'Foundations',
    issuer: 'Anthropic',
    featured: true,
    accent: 'saffron',
    href: asset('Certificates/claude101-certificate.pdf'),
  },
  {
    title: 'Claude Code 101',
    category: 'Claude Code',
    issuer: 'Anthropic',
    featured: true,
    accent: 'ultra',
    href: asset('Certificates/ClaudeCode101-certificate.pdf'),
  },
  {
    title: 'Subagents',
    category: 'Agents',
    issuer: 'Anthropic',
    featured: true,
    accent: 'pink',
    href: asset('Certificates/Certificate-SubAgents.pdf'),
  },
  {
    title: 'Introduction to agent skills',
    category: 'Agents',
    issuer: 'Anthropic',
    accent: 'pink',
    href: asset('Certificates/Certificate-Introduction%20to%20agent%20skills.pdf'),
  },
  {
    title: 'Claude Code in Action',
    category: 'Claude Code',
    issuer: 'Anthropic',
    accent: 'ultra',
    href: asset('Certificates/Claude%20Code%20in%20Action.pdf'),
  },
  {
    title: 'Introduction to Model Context Protocol',
    category: 'Model Context Protocol',
    issuer: 'Anthropic',
    accent: 'mint',
    href: asset('Certificates/Introduction%20to%20Model%20Context%20Protocol.pdf'),
  },
];
