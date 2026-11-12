import { Outlet, ScrollRestoration } from 'react-router';
import IconSprite from '../common/IconSprite';
import SkipLink from '../common/SkipLink';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

/**
 * Shared shell for every route: skip link, navbar, the page (in <main>), footer and back-to-top.
 * ScrollRestoration starts new pages at the top, restores position on back/forward,
 * and scrolls to the section on /#section URLs.
 */
export default function Layout() {
  return (
    <>
      <SkipLink />
      <IconSprite />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
    </>
  );
}
