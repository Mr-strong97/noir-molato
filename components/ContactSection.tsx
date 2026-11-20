'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  CONFIG,
  ContactFormValues,
  buildContactWhatsAppUrl,
  buildGeneralWhatsAppUrl,
  validateContactForm,
} from '@/lib/molato-data';

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({
    nom: '',
    telephone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const check = validateContactForm(values);
    if (!check.valid) {
      setErrors(check.errors);
      setSubmittedUrl(null);
      return;
    }

    setErrors({});
    setSubmitting(true);
    const waUrl = buildContactWhatsAppUrl(CONFIG.whatsapp, values);

    setTimeout(() => {
      setSubmitting(false);
      setSubmittedUrl(waUrl);
      setValues({ nom: '', telephone: '', message: '' });
    }, 250);
  };

  const channels = [
    {
      label: 'WhatsApp',
      value: CONFIG.whatsappDisplay,
      href: `https://wa.me/${CONFIG.whatsapp}`,
      external: true,
    },
    {
      label: 'E-mail',
      value: CONFIG.email,
      href: `mailto:${CONFIG.email}`,
      external: false,
    },
    {
      label: 'Instagram',
      value: CONFIG.instagramHandle,
      href: CONFIG.instagram,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      data-theme="light"
      aria-labelledby="contact-titre"
      className="relative bg-white text-black py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
          {/* Left 6 columns: Giant editorial title + guidance */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-10 bg-black/50" aria-hidden="true" />
              <span className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/70">
              Contact &amp; commande
              </span>
            </div>

            <h2
              id="contact-titre"
              className="font-serif-editorial font-normal leading-[1.0] tracking-[-0.02em] text-black"
              style={{ fontSize: 'var(--t-2xl)' }}
            >
              Votre commande,{' '}
              <span className="italic">sans complication.</span>
            </h2>

            <div className="mt-10 space-y-2 max-w-[32rem] font-sans-editorial text-base leading-[1.7] text-black/70">
              <p>Écrivez-nous sur WhatsApp avec la pièce et la taille souhaitées.</p>
              <p>Nous livrons uniquement à Kinshasa, tous les jours de 08h00 à 19h00.</p>
            </div>

            {/* Minimal underline contact form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-12 max-w-lg space-y-7"
            >
              <div>
                <label
                  htmlFor="contact-nom"
                  className="block font-sans-editorial text-xs font-medium uppercase tracking-[0.16em] text-black/70 mb-1"
                >
                  Nom
                </label>
                <input
                  id="contact-nom"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  value={values.nom}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, nom: e.target.value }));
                    if (errors.nom) setErrors((prev) => ({ ...prev, nom: undefined }));
                  }}
                  placeholder="Votre nom complet"
                  className="w-full h-14 bg-transparent border-b border-black/30 focus:border-black text-base text-black placeholder:text-black/35 focus:outline-none transition-colors"
                />
                {errors.nom && (
                  <p role="alert" className="mt-2 font-sans-editorial text-xs font-medium text-black">
                    {errors.nom}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-telephone"
                  className="block font-sans-editorial text-xs font-medium uppercase tracking-[0.16em] text-black/70 mb-1"
                >
                  Téléphone
                </label>
                <input
                  id="contact-telephone"
                  name="telephone"
                  type="tel"
                  autoComplete="tel"
                  value={values.telephone}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, telephone: e.target.value }));
                    if (errors.telephone) setErrors((prev) => ({ ...prev, telephone: undefined }));
                  }}
                  placeholder="+243 81 000 00 00"
                  className="w-full h-14 bg-transparent border-b border-black/30 focus:border-black text-base text-black placeholder:text-black/35 focus:outline-none transition-colors"
                />
                {errors.telephone && (
                  <p role="alert" className="mt-2 font-sans-editorial text-xs font-medium text-black">
                    {errors.telephone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-sans-editorial text-xs font-medium uppercase tracking-[0.16em] text-black/70 mb-1"
                >
                  Votre message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={2}
                  value={values.message}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Ex. Jogging vert sauge, taille M"
                  className="w-full py-3 bg-transparent border-b border-black/30 focus:border-black text-base text-black placeholder:text-black/35 focus:outline-none resize-none transition-colors"
                />
                {errors.message && (
                  <p role="alert" className="mt-2 font-sans-editorial text-xs font-medium text-black">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden bg-black px-8 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-white border border-black transition-colors duration-300 hover:bg-white hover:text-black disabled:opacity-60"
                >
                  <span>{submitting ? 'Envoi en cours…' : 'Envoyer'}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <a
                  href={buildGeneralWhatsAppUrl(CONFIG.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 border border-black px-6 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-black transition-colors duration-300 hover:bg-black hover:text-white whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Discuter sur WhatsApp</span>
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </div>

              <div aria-live="polite">
                {submittedUrl && (
                  <div className="border-t border-black pt-4 flex flex-col gap-3">
                    <p className="font-sans-editorial text-sm font-medium text-black">
                      Merci. Pour finaliser l’envoi direct avec l’atelier, ouvrez votre message sur WhatsApp :
                    </p>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-fit items-center gap-2 border border-black px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-black hover:bg-black hover:text-white transition-colors"
                    >
                      <span>Poursuivre sur WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">(nouvel onglet)</span>
                    </a>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right 5 columns (col 8-12): Direct interactive channel lines + atelier address */}
          <div className="lg:col-start-8 lg:col-span-5">
            <ul className="border-t border-black">
              {channels.map((ch) => (
                <li key={ch.label} className="border-b border-black">
                  <a
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    className="group relative flex min-h-[76px] items-center justify-between gap-4 overflow-hidden px-3 py-5 transition-colors duration-300"
                  >
                    {/* Inverted background rising from bottom */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-black translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                    />
                    <span className="relative z-10 font-serif-editorial text-2xl sm:text-3xl font-normal text-black transition-colors duration-300 group-hover:text-white">
                      {ch.label}
                    </span>
                    <span className="relative z-10 inline-flex items-center gap-3 font-sans-editorial text-xs sm:text-sm font-normal tracking-[0.04em] text-black/75 transition-colors duration-300 group-hover:text-white">
                      <span>{ch.value}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </span>
                    {ch.external && <span className="sr-only">(nouvel onglet)</span>}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              <div>
                <h3 className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/55">
                  Adresse
                </h3>
                <p className="mt-2 font-sans-editorial text-sm leading-[1.6] text-black/85">
                  {CONFIG.adresse}
                </p>
              </div>
              <div>
                <h3 className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/55">
                  Horaires
                </h3>
                <p className="mt-2 font-sans-editorial text-sm leading-[1.6] text-black/85">
                  {CONFIG.horaires}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
