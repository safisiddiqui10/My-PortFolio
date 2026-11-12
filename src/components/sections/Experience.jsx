import { experience } from '../../data/experience';
import { cn } from '../../utils/cn';
import Section, { HEADING_GAP } from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Timeline from '../common/Timeline';

/**
 * Experience section. Hidden for now, as in the original site.
 * To show it: render <Experience /> in pages/HomePage.jsx and uncomment the
 * Experience entry in data/navigation.js (navbar, mobile menu and footer).
 */
export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle className={cn('text-ink max-w-4xl', HEADING_GAP)}>Experience</SectionTitle>
      <Timeline items={experience} headingAs="h3" className="max-w-3xl" />
    </Section>
  );
}
