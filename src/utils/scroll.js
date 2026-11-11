const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const behavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

/** Scroll to an element, leaving room for the fixed navbar. */
export function scrollToElement(target) {
  const navbar = document.getElementById('navbar');
  const navHeight = navbar ? navbar.offsetHeight : 0;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top: targetPosition, behavior: behavior() });
}

/** Scroll to the section with this id. Returns false if it isn't on the page. */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return false;
  scrollToElement(target);
  return true;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: behavior() });
}
