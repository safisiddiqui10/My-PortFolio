import { ArrowLeft } from 'lucide-react';
import CertificateCard from '../components/cards/CertificateCard';
import PageHeader from '../components/common/PageHeader';
import SectionLink from '../components/common/SectionLink';
import TextLink from '../components/common/TextLink';
import { certifications } from '../data/certifications';
import { usePageMeta } from '../hooks/usePageMeta';

/** Every certificate. Each card shows its category, so a single grid reads well at this size. */
export default function CertificationsPage() {
  usePageMeta({
    title: 'Certifications',
    description: `Certificates earned by Safi Siddiqui: ${certifications.map((c) => c.title).join(', ')}.`,
    path: '/certifications',
  });

  return (
    <>
      <PageHeader
        title="Certifications"
        back={
          <TextLink as={SectionLink} section="certifications">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </TextLink>
        }
      >
        <p>{`${certifications.length} completed courses.`}</p>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {certifications.map((certificate) => (
            <CertificateCard key={certificate.href} certificate={certificate} titleAs="h2" />
          ))}
        </div>
      </div>
    </>
  );
}
