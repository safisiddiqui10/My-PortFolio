import { useLocation, useNavigate } from 'react-router';
import { scrollToSection } from '../../utils/scroll';

/**
 * Link to a homepage section (`/#section`).
 * On the homepage it smooth-scrolls to the section, offset by the navbar.
 * On any other page it navigates home and the router scrolls to the section.
 * Modified clicks (new tab, etc.) keep the browser's default behavior.
 */
export default function SectionLink({ section, onClick, children, ...props }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const href = `/#${section}`;

  function handleClick(event) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    if (pathname === '/' && scrollToSection(section)) return;
    navigate(href);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
