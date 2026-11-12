import { aboutParagraphs, education, focusAreas } from '../../data/about';
import { cn } from '../../utils/cn';
import Section, { HEADING_GAP } from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Timeline from '../common/Timeline';

/** Render text with **bold** segments. */
function withBold(text, strongClass) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className={strongClass}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

/**
 * Section heading; then two balanced columns, "About me" (lead + story) beside "Education";
 * then the four focus areas in one row.
 */
export default function About() {
  return (
    <Section id="about">
      <SectionTitle className={cn('text-ink max-w-4xl', HEADING_GAP)}>
        Computer Science Student Building Full-Stack and AI projects
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: About me */}
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-8">About me</h3>
          <p className="text-xl lg:text-[22px] leading-8 lg:leading-9 tracking-[-0.01em] text-ink">
            {withBold(aboutParagraphs[0], 'font-semibold')}
          </p>
          <div className="space-y-5 text-lg leading-8 text-ink-2 mt-5">
            {aboutParagraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{withBold(paragraph, 'font-semibold text-ink')}</p>
            ))}
          </div>
        </div>

        {/* Right: Education timeline */}
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.02em] mb-8">Education</h3>
          <Timeline items={education} headingAs="h4" />
        </div>
      </div>

      {/* Focus areas in one row */}
      <dl className={cn('grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mt-14 lg:mt-20')}>
        {focusAreas.map((area) => (
          <div key={area.term} className={cn('border-t-4 pt-3', area.borderClass)}>
            <dt className="text-sm text-ink-3 mb-1">{area.term}</dt>
            <dd className="text-lg font-semibold">{area.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
