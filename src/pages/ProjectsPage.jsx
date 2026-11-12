import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/cards/ProjectCard';
import ButtonLink from '../components/common/ButtonLink';
import PageHeader from '../components/common/PageHeader';
import SectionLink from '../components/common/SectionLink';
import TextLink from '../components/common/TextLink';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProjectsPage() {
  usePageMeta({
    title: 'Projects',
    description: `Projects by Safi Siddiqui: ${projects.map((project) => project.title).join(', ')}.`,
    path: '/projects',
  });

  return (
    <>
      <PageHeader
        title="Projects"
        back={
          <TextLink as={SectionLink} section="projects">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </TextLink>
        }
      >
        <p>{`${projects.length} projects, with their tech stack and links.`}</p>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
        <div className="space-y-4 sm:space-y-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} titleAs="h2" wide />
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
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
      </div>
    </>
  );
}
