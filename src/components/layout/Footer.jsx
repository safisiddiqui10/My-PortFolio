import { footerLinks } from '../../data/navigation';
import { site } from '../../data/site';
import SectionLink from '../common/SectionLink';
import SocialLinks from '../common/SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-lg font-semibold mb-1">{site.name}</p>
            <p className="text-sm text-ink-3">{site.footerTagline}</p>
            <p className="text-sm text-ink-3 mt-4">
              © <span id="current-year">{year}</span> {site.name}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-2">
            {footerLinks.map((link) => (
              <SectionLink key={link.section} section={link.section} className="hover:text-ink transition-colors">
                {link.label}
              </SectionLink>
            ))}
          </div>

          <SocialLinks variant="footer" className="flex flex-wrap items-center gap-2" />
        </div>
      </div>
    </footer>
  );
}
