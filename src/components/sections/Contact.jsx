import { ArrowUpRight, FileText, Mail, MapPin } from 'lucide-react';
import { site } from '../../data/site';
import { contactProfiles } from '../../data/socialLinks';
import { cn } from '../../utils/cn';
import { SpriteIcon } from '../common/IconSprite';
import Section, { HEADING_GAP } from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ContactForm from '../forms/ContactForm';

export default function Contact() {
  return (
    <Section id="contact" bordered={false} className="bg-paper-2 text-ink border-y border-line">
      <SectionTitle className="max-w-4xl mb-5">Have a project in mind or want to collaborate?</SectionTitle>
      <p className={cn('text-lg text-ink-2', HEADING_GAP)}>Send a message here or email me directly.</p>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Form */}
        <div className="bg-surface border border-line rounded-2xl p-5 sm:p-8 self-start">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="min-w-0">
          <div className="space-y-4 text-base sm:text-lg">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 shrink-0 text-tmint" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-ultrat transition-colors">
                {site.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-tsaffron" />
              <span className="text-ink-2">{site.location}</span>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 mt-1 shrink-0 text-tpink" />
              <a href={site.resumeUrl} download className="hover:text-ultrat transition-colors">
                Download Resume
              </a>
            </div>
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.02em] mt-12 sm:mt-14 mb-4">Find Me On</h3>
          <ul className="divide-y divide-line border-y border-line text-base sm:text-lg">
            {contactProfiles.map((profile) => (
              <li key={profile.id}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-4 h-14 hover:text-ultrat transition-colors"
                >
                  {profile.image ? (
                    <img src={profile.image} alt="" className="w-5 h-5 shrink-0" />
                  ) : (
                    <SpriteIcon id={profile.icon} className={cn('w-5 h-5 shrink-0', profile.iconClass)} />
                  )}
                  {profile.label}
                  <ArrowUpRight className="w-4 h-4 ml-auto text-ink-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
