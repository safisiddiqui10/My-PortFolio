/**
 * Section links used by the navbar, mobile menu and footer. They always point at homepage sections.
 * `page` marks the dedicated page for that section, so the link is highlighted while you're on it.
 * To show Experience: uncomment its entry here and render <Experience /> in pages/HomePage.jsx.
 */
export const navLinks = [
  { section: 'hero', label: 'Home' },
  { section: 'about', label: 'About' },
  // { section: 'experience', label: 'Experience' },
  { section: 'skills', label: 'Skills', page: '/skills' },
  { section: 'projects', label: 'Projects', page: '/projects' },
  { section: 'certifications', label: 'Certifications', page: '/certifications' },
  { section: 'contact', label: 'Contact' },
];

/** The footer lists every section except Home. */
export const footerLinks = navLinks.filter((link) => link.section !== 'hero');
