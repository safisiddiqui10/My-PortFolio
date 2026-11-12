import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import ButtonLink from '../components/common/ButtonLink';
import PageHeader from '../components/common/PageHeader';
import SectionLink from '../components/common/SectionLink';
import TextLink from '../components/common/TextLink';
import { skillCategories } from '../data/skills';
import { usePageMeta } from '../hooks/usePageMeta';
import { cn } from '../utils/cn';

/** Accent mark per category color, matching the homepage band colors (full class strings for Tailwind). */
const ACCENT = { blue: 'bg-ultra', mint: 'bg-mint', saffron: 'bg-saffron', pink: 'bg-pink' };

const skillCount = skillCategories.reduce((total, category) => total + category.skills.length, 0);

/** Every skill, by category, in the order of src/data/skills.js. */
export default function SkillsPage() {
  usePageMeta({
    title: 'Skills',
    description: `The full tech stack of Safi Siddiqui: ${skillCount} skills across ${skillCategories.length} categories, from ${skillCategories[0].title.toLowerCase()} to ${skillCategories[skillCategories.length - 1].title.toLowerCase()}.`,
    path: '/skills',
  });

  return (
    <>
      <PageHeader
        title="Tech stack and expertise"
        back={
          <TextLink as={SectionLink} section="skills">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </TextLink>
        }
      >
        <p>{`${skillCount} skills across ${skillCategories.length} categories.`}</p>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 chips-plain">
        <div className="divide-y divide-line border-y border-line">
          {skillCategories.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`skill-${category.id}`}
              className="grid lg:grid-cols-[0.8fr_2.2fr] gap-5 lg:gap-16 py-8 sm:py-10"
            >
              <div>
                <span aria-hidden="true" className={cn('block h-1.5 w-10 rounded-full mb-4', ACCENT[category.color])} />
                <h2
                  id={`skill-${category.id}`}
                  className="text-2xl sm:text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink"
                >
                  {category.title}
                </h2>
                <p className="text-sm text-ink-3 mt-2">{`${category.skills.length} skills`}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col sm:flex-row gap-3">
        <ButtonLink as={Link} to="/projects" variant="outline" className="w-full sm:w-auto justify-center gap-2">
          View projects
          <ArrowRight className="w-4 h-4" />
        </ButtonLink>
        <ButtonLink as={Link} to="/certifications" variant="outline" className="w-full sm:w-auto justify-center gap-2">
          View certificates
          <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </>
  );
}
