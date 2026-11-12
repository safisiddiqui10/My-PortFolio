import { site } from '../data/site';

/**
 * Contact-form delivery.
 *
 * With EmailJS configured (see .env.example), messages are sent through EmailJS's REST API
 * from the browser. EmailJS's public key is meant to be public, so it's safe in client code.
 * Without it, the form falls back to opening the visitor's email app with the message filled in.
 */
const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const canSendDirectly = Boolean(emailjs.serviceId && emailjs.templateId && emailjs.publicKey);

/**
 * Send a message through EmailJS. Throws if delivery fails.
 * Template variables available in the EmailJS template: {{from_name}}, {{reply_to}}, {{message}}.
 */
export async function sendMessage({ name, email, message }) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: emailjs.serviceId,
      template_id: emailjs.templateId,
      user_id: emailjs.publicKey,
      template_params: { from_name: name, reply_to: email, message },
    }),
  });
  if (!response.ok) {
    throw new Error(`EmailJS responded ${response.status}: ${await response.text()}`);
  }
}

/** A mailto: link with the visitor's message ready to send to the site owner. */
export function mailtoLink({ name, email, message }) {
  const subject = `Portfolio message from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
