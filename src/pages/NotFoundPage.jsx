import { Link, useLocation } from 'react-router';
import ButtonLink from '../components/common/ButtonLink';
import PageHeader from '../components/common/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  const { pathname } = useLocation();
  usePageMeta({
    title: 'Page not found',
    description: "This page doesn't exist or has moved.",
    path: pathname,
    noIndex: true,
  });

  return (
    <>
      <PageHeader title="Page not found">
        <p>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      </PageHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32 flex flex-col sm:flex-row gap-3">
        <ButtonLink as={Link} to="/" className="w-full sm:w-auto justify-center">
          Go to homepage
        </ButtonLink>
        <ButtonLink as={Link} to="/projects" variant="outline" className="w-full sm:w-auto justify-center">
          View projects
        </ButtonLink>
      </div>
    </>
  );
}
