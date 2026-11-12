import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { categoriesForBand, skillBands } from '../../data/skills';
import { cn } from '../../utils/cn';
import ButtonLink from '../common/ButtonLink';
import { HEADING_GAP } from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import SkillBand from '../common/SkillBand';

/** Homepage skills: 4 colored bands with their key categories. Every category is on /skills. */
export default function Skills() {
  return (
    <section id="skills" className="pt-20 sm:pt-24 lg:pt-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className={cn('text-ink max-w-4xl', HEADING_GAP)}>Tech stack and expertise</SectionTitle>
      </div>

      {skillBands.map((band) => (
        <SkillBand key={band.band} band={band.band} color={band.color} title={band.title} groups={categoriesForBand(band)} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <ButtonLink as={Link} to="/skills" variant="outline" className="w-full sm:w-auto justify-center gap-2">
          View all skills
          <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </section>
  );
}
