import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { site } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollThreshold } from '../../hooks/useScrollThreshold';
import { cn } from '../../utils/cn';
import SectionLink from '../common/SectionLink';
import ThemeToggle from '../common/ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isScrolled = useScrollThreshold(50);
  const activeSection = useActiveSection({ enabled: isHome });
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // On the homepage, highlight the section in view; elsewhere, the section the current page belongs to.
  const isActive = (link) =>
    isHome
      ? link.section === activeSection
      : Boolean(link.page && (pathname === link.page || pathname.startsWith(`${link.page}/`)));

  // Close the mobile menu after navigating to another page (e.g. with the browser's back button).
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // While the mobile menu is open: close it on a click outside it, or on Escape.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handleDocumentClick(event) {
      if (!menuRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Close synchronously so the scroll that follows measures the navbar without the open menu.
  const closeMenu = () => flushSync(() => setIsMenuOpen(false));

  return (
    <nav
      id="navbar"
      aria-label="Main"
      className={cn('fixed top-0 left-0 w-full z-50 transition-colors', (isScrolled || isMenuOpen) && 'nav-scrolled')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <SectionLink section="hero" className="text-lg font-semibold tracking-[-0.01em] text-ink">
            {site.brand}
          </SectionLink>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <SectionLink
                  key={link.section}
                  section={link.section}
                  aria-current={active ? (isHome ? 'location' : 'page') : undefined}
                  className={cn(
                    'nav-link px-3 h-9 inline-flex items-center text-sm font-medium transition-colors rounded-lg',
                    active ? 'bg-ink text-paper' : 'text-ink-2 hover:text-ink',
                  )}
                >
                  {link.label}
                </SectionLink>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              id="mobile-menu-btn"
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-lg text-ink hover:bg-paper-2 transition-colors"
            >
              <Menu className="icon-open w-5 h-5" />
              <X className="icon-close w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          className={cn(
            'mobile-menu md:hidden mb-3 bg-surface border border-line rounded-xl p-2',
            !isMenuOpen && 'hidden',
          )}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <SectionLink
                key={link.section}
                section={link.section}
                onClick={closeMenu}
                className="mobile-nav-link flex items-center h-11 px-3 text-sm font-medium text-ink hover:bg-paper rounded-lg transition-colors"
              >
                {link.label}
              </SectionLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
