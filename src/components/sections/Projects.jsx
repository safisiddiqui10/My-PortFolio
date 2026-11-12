import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../../data/projects';
import { site } from '../../data/site';
import { cn } from '../../utils/cn';
import ProjectCard from '../cards/ProjectCard';
import ButtonLink from '../common/ButtonLink';
import Section, { HEADING_GAP } from '../common/Section';
import SectionTitle from '../common/SectionTitle';

/** Homepage projects: featured ones only. Every project is listed on /projects. */
export default function Projects() {
  const featured = projects.filter((project) => project.featured !== false);

  return (
    <Section id="projects">
      <SectionTitle className={cn('text-ink max-w-4xl', HEADING_GAP)}>Projects</SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} maxHighlights={3} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10">
        <ButtonLink as={Link} to="/projects" variant="outline" className="w-full sm:w-auto justify-center gap-2">
          View all projects
          <ArrowRight className="w-4 h-4" />
        </ButtonLink>
        <ButtonLink
          href={site.githubUrl}
          target="_blank"
          rel="noopener"
          className="w-full sm:w-auto justify-center gap-2"
        >
          View on GitHub
          <ArrowUpRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
