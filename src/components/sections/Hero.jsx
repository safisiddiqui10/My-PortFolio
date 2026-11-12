import { Fragment } from 'react';
import { Download } from 'lucide-react';
import { site } from '../../data/site';
import ButtonLink from '../common/ButtonLink';
import SectionLink from '../common/SectionLink';
import SocialLinks from '../common/SocialLinks';

const TITLES = ['MERN Stack Developer', 'AI Engineer', 'Aspiring Data Scientist'];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] items-center gap-14 lg:gap-12">
          {/* Left: Text */}
          <div>
            {/* Name */}
            <h1 className="rise text-[44px] sm:text-[64px] lg:text-[88px] font-bold leading-[1] tracking-[-0.04em] text-ink">
              {site.name}
            </h1>

            {/* Job titles */}
            <p
              className="rise text-lg sm:text-xl lg:text-2xl font-semibold leading-snug text-ultrat mt-5"
              style={{ animationDelay: '0.06s' }}
            >
              {TITLES.map((title, index) => (
                <Fragment key={title}>
                  {index > 0 && <span className="text-ink-3 font-normal"> | </span>}
                  {title}
                </Fragment>
              ))}
            </p>

            {/* Intro: statement as the bold lead-in, description after it */}
            <p
              className="rise text-lg lg:text-xl leading-7 lg:leading-8 text-ink-2 max-w-2xl mt-8 mb-10"
              style={{ animationDelay: '0.12s' }}
            >
              <strong className="font-semibold text-ink">I Build Full-stack Web Apps and AI Systems.</strong> Building
              scalable web applications, intelligent AI systems and data-driven solutions, and exploring agentic AI
              systems.
            </p>

            <div className="rise flex flex-wrap items-center gap-3" style={{ animationDelay: '0.2s' }}>
              <ButtonLink href={site.resumeUrl} download className="gap-2">
                Download Resume
                <Download className="w-4 h-4" />
              </ButtonLink>
              <ButtonLink as={SectionLink} section="contact" variant="outline">
                Get in Touch
              </ButtonLink>
            </div>

            <SocialLinks
              variant="hero"
              className="rise flex items-center gap-3 mt-8"
              style={{ animationDelay: '0.28s' }}
            />
          </div>

          {/* Right: Portrait card with the four accent colors underneath (below the text on phones and tablets) */}
          <div
            className="rise justify-self-start lg:justify-self-end w-full max-w-[264px] lg:max-w-[344px]"
            style={{ animationDelay: '0.15s' }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-line bg-paper-2">
              <picture>
                <source srcSet={site.portraitWebpUrl} type="image/webp" />
                <img
                  src={site.portraitUrl}
                  alt={`Portrait of ${site.name}`}
                  width={896}
                  height={1195}
                  fetchPriority="high"
                  className="w-full h-full object-cover scale-[1.3] origin-[30%_0%]"
                />
              </picture>
            </div>
            <div className="flex gap-2.5 mt-4" aria-hidden="true">
              <span className="h-1.5 w-12 rounded-full bg-ultra"></span>
              <span className="h-1.5 w-12 rounded-full bg-mint"></span>
              <span className="h-1.5 w-12 rounded-full bg-saffron"></span>
              <span className="h-1.5 w-12 rounded-full bg-pink"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
