import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { certifications } from '../../data/certifications';
import { cn } from '../../utils/cn';
import CertificateCard from '../cards/CertificateCard';
import ButtonLink from '../common/ButtonLink';
import Section, { HEADING_GAP } from '../common/Section';
import SectionTitle from '../common/SectionTitle';

/** Homepage certifications: featured ones only. All of them are on /certifications. */
export default function Certifications() {
  const featured = certifications.filter((certificate) => certificate.featured);

  return (
    <Section id="certifications">
      <div className={cn('flex flex-col sm:flex-row sm:items-end justify-between gap-4', HEADING_GAP)}>
        <SectionTitle className="text-ink">Certifications</SectionTitle>
        <p className="text-base text-ink-2">{`${certifications.length} completed courses`}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {featured.map((certificate) => (
          <CertificateCard key={certificate.href} certificate={certificate} />
        ))}
      </div>

      <div className="mt-8 sm:mt-10">
        <ButtonLink as={Link} to="/certifications" variant="outline" className="w-full sm:w-auto justify-center gap-2">
          View all certificates
          <ArrowRight className="w-4 h-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
