import { useState } from 'react';
import { Send } from 'lucide-react';
import { site } from '../../data/site';
import { canSendDirectly, mailtoLink, sendMessage } from '../../services/contact';
import { cn } from '../../utils/cn';

const fieldClass =
  'w-full bg-paper border border-line rounded-[10px] text-ink placeholder-ink-3 focus:border-ultrat transition-colors text-base';

const emailLink = (
  <a href={`mailto:${site.email}`} className="underline underline-offset-2 hover:text-ultrat transition-colors">
    {site.email}
  </a>
);

/**
 * Contact form.
 * - EmailJS configured: sends the message, then confirms (or reports the failure).
 * - Not configured: opens the visitor's email app with the message filled in.
 * See services/contact.js.
 */
export default function ContactForm() {
  // 'idle' | 'sending' | 'sent' | 'error' | 'mailto'
  const [status, setStatus] = useState('idle');
  const isSending = status === 'sending';
  const hasMessage = status === 'sent' || status === 'error' || status === 'mailto';

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));

    if (!canSendDirectly) {
      window.location.href = mailtoLink(fields);
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      await sendMessage(fields);
      form.reset();
      setStatus('sent');
    } catch (error) {
      console.error('Contact form delivery failed', error);
      setStatus('error');
    }
  }

  return (
    <form id="contact-form" className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-2 mb-2">
          Full name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          className={cn(fieldClass, 'h-12 px-4')}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-2 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={cn(fieldClass, 'h-12 px-4')}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-2 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="What are you working on?"
          className={cn(fieldClass, 'px-4 py-3 resize-none')}
        ></textarea>
      </div>
      <button
        type="submit"
        id="submit-btn"
        disabled={isSending}
        className={cn(
          'w-full h-12 px-6 rounded-[10px] bg-ink text-paper text-[15px] font-semibold hover:bg-ultra hover:text-white active:scale-[0.98] transition-[color,background-color,transform] flex items-center justify-center gap-2',
          isSending && 'opacity-70 cursor-not-allowed',
        )}
      >
        <span id="submit-text">{isSending ? 'Sending...' : 'Send message'}</span>
        <span id="submit-spinner" className={cn('spinner', !isSending && 'hidden')}></span>
        <Send className="w-4 h-4" />
      </button>

      {/* Announced to screen readers when it changes */}
      <div
        id="form-status"
        role="status"
        aria-live="polite"
        // Always in the DOM so screen readers announce changes; takes no space while empty
        className={cn('text-sm font-medium', !hasMessage && '!mt-0')}
      >
        {status === 'sent' && <p className="text-tmint">Message sent. I&apos;ll get back to you soon.</p>}
        {status === 'error' && (
          <p className="text-tpink">
            Your message couldn&apos;t be sent. Please try again, or email me at {emailLink}.
          </p>
        )}
        {status === 'mailto' && (
          <p className="text-ink-2">
            Your email app should open with your message ready to send. If it didn&apos;t, email me at {emailLink}.
          </p>
        )}
      </div>
    </form>
  );
}
