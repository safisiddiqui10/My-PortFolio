import { ArrowUpRight, Award } from 'lucide-react';
import { certificateAccents } from '../../data/certifications';
import { cn } from '../../utils/cn';

export default function CertificateCard({ certificate, titleAs: Title = 'h3' }) {
  const { title, category, issuer, href, accent } = certificate;
  const colors = certificateAccents[accent];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="group block p-2 bg-surface border border-line rounded-2xl hover:border-ink/40 transition-colors"
    >
      <div className="relative flex flex-col h-full sm:min-h-[220px] p-5 sm:p-6 border border-line rounded-xl">
        <span
          className={cn(
            'absolute top-5 right-5 w-11 h-11 inline-flex items-center justify-center rounded-full ring-4',
            colors.badge,
          )}
        >
          <Award className={cn('w-5 h-5', colors.icon)} />
        </span>
        <p className={cn('text-sm font-semibold pr-14', colors.label)}>{category}</p>
        <Title className="text-xl sm:text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink mt-3 pr-6">
          {title}
        </Title>
        {issuer && <p className="text-sm text-ink-3 mt-2">Issued by {issuer}</p>}
        <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-2 group-hover:text-ink transition-colors">
          View certificate
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}
